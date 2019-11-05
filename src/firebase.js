import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyCpjJeLdNWNZZ4eNtIlWpmIcY1T6FsXxuw",
    authDomain: "react-slack-clone-56389.firebaseapp.com",
    databaseURL: "https://react-slack-clone-56389.firebaseio.com",
    projectId: "react-slack-clone-56389",
    storageBucket: "react-slack-clone-56389.appspot.com",
    messagingSenderId: "977330593637",
    appId: "1:977330593637:web:cd093805a463da3a1f4b8c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;