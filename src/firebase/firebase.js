import * as firebaseApp from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig";

let firebase = firebaseApp.initializeApp(firebaseConfig);

export default firebase;
