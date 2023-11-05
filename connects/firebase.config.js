import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBPoMTaFafKpLFYLvx2x4Jmnv85lKkYww8",
    authDomain: "leading-gallery.firebaseapp.com",
    projectId: "leading-gallery",
    storageBucket: "leading-gallery.appspot.com",
    messagingSenderId: "1066382103089",
    appId: "1:1066382103089:web:3513a32bc53b6eb86dbb10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
