const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
// const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request: any, response: any) => {
  // const docRef = db.collection('users').doc(uid);

  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});