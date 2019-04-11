import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

import admin = require('firebase-admin');
admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log("Helo!");
 response.send("Hello everyone from Firebase!");
});
