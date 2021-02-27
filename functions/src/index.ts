const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const katex = require('katex');

const app = express();

admin.initializeApp();

const db = admin.firestore();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get('/embed/:id', async (req:any, res:any) => {
  const id = req.params.id;
  console.log(id);
  const docRef = db.collection('equations').doc(id);
  const doc = await docRef.get();
  const { equation } = doc.data() ?? {};

  if (!equation) {
    res.send('Equation does not exists.');
  }

  const html = katex.renderToString(equation, {
    throwOnError: false
  });

  res.send(`
  <!doctype html>
    <head>
      <link rel="icon" href="https://mathembed.online/favicon.ico" />
      <link rel="alternate" type="application/json+oembed"
        href="https://mathembed.online/oembed?url=https://mathembed.online/embed/${id}"
        title="Math Embed Equation" />
      <title>Math Embed Equation</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.css" 
        integrity="sha384-qCEsSYDSH0x5I45nNW4oXemORUZnYFtPy/FqB/OjqxabTMW5HVaaH9USK4fN3goV"
        crossorigin="anonymous">
      <style>
        html {overflow: hidden;}
        body {
          height: 100%;
          width: 100%;
          margin: 0;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
    </head>
    <body>
      ${html}
    </body>
  </html>`);
});

exports.app = functions.https.onRequest(app);