import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    // add Your web app's Firebase configuration
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;