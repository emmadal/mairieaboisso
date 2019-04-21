import * as firebase from "firebase"

const config = {
  apiKey: "AIzaSyAdnWQ4aGLV_g8ne2e-EHQEK8Cd5jo01cw",
  authDomain: "mairieaboisso-5a8a7.firebaseapp.com",
  databaseURL: "https://mairieaboisso-5a8a7.firebaseio.com",
  projectId: "mairieaboisso-5a8a7",
  storageBucket: "mairieaboisso-5a8a7.appspot.com",
  messagingSenderId: "167498187772"
}
export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app())
