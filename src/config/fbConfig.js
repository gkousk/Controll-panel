import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyDMFN68APYgyymtS2RZ6w-NL07Cjixs3dM",
    authDomain: "gkouskshop-80e13.firebaseapp.com",
    databaseURL: "https://gkouskshop-80e13.firebaseio.com",
    projectId: "gkouskshop-80e13",
    storageBucket: "gkouskshop-80e13.appspot.com",
    messagingSenderId: "1019113117666"
  };
  firebase.initializeApp(config);
  const storage=firebase.storage();

  firebase.firestore().settings({timestampsInSnapshots:true});
  export {
    storage,firebase as default
  }