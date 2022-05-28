import { initializeApp, getApps } from 'firebase/app'
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET
} from 'config/env/database'

export default () => {
  const credentials = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
  }

  const apps = getApps()

  if (apps.length <= 0) {
    const app = initializeApp(credentials)
    return app
  }
}
