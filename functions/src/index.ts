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

app.get('/oembed', (req:any, res:any) => {
  const url = req.query.url;

  const maxWidth = req.query.maxwidth ?? 384;
  const maxHeight = req.query.maxheight ?? 64;

  const width = maxWidth < 384 ? maxWidth : 384;
  const height = maxHeight < 64 ? maxHeight : 64;

  const oembed = {
    provider_url: 'https://mathembed.online/',
    version: '1.0',
    provider_name: 'Math Embed',
    height: 64,
    width: 384,
    type: 'rich',
    html: `<iframe src="${url}" frameborder="0" width="${width}" height="${height}"></iframe>`,
  };

  res.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000');

  res.json(oembed);
});

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

  res.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000');
  // TODO: Add sponsorship
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