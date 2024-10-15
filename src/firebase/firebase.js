import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA3Yay5vqR8Vw719fx7uuuo0-H2QofR5g8",
//   authDomain: "healthtrick-5d62b.firebaseapp.com",
//   projectId: "healthtrick-5d62b",
//   storageBucket: "healthtrick-5d62b.appspot.com",
//   messagingSenderId: "313435364377",
//   appId: "1:313435364377:web:c14840c30b73f228729e88",
//   measurementId: "G-VNS091V23N"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyB8sKXV3bCsGxycuOUoLsjohiR-gLaqY_U",
//   authDomain: "techtricks-95033.firebaseapp.com",
//   projectId: "techtricks-95033",
//   storageBucket: "techtricks-95033.appspot.com",
//   messagingSenderId: "478819483123",
//   appId: "1:478819483123:web:954082d56cf9644cfd2686",
//   measurementId: "G-SHLRPMP0W4"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDw0VP8rxqRTXALe8DfQLBYdBKIsffwUsk",
//   authDomain: "healthtrack-c23b5.firebaseapp.com",
//   projectId: "healthtrack-c23b5",
//   storageBucket: "healthtrack-c23b5.appspot.com",
//   messagingSenderId: "372801768354",
//   appId: "1:372801768354:web:9117e61fc34ae924cdc0fb",
//   measurementId: "G-FWNKG5FGGB"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDUOLhkvau96w_ClMYHtujA0HQlm6LV8Go",
//   authDomain: "astroguide-35db7.firebaseapp.com",
//   projectId: "astroguide-35db7",
//   storageBucket: "astroguide-35db7.appspot.com",
//   messagingSenderId: "170894307366",
//   appId: "1:170894307366:web:8fa49f23d0747e554136e7", 
//   measurementId: "G-10BBVPY06J",
// };

// new emailid
const firebaseConfig = {
  apiKey: "AIzaSyAWjUKs37H2KpbvhgpTsk7q_QZ9OlfguHc",
  authDomain: "tech-tricks-72e15.firebaseapp.com",
  projectId: "tech-tricks-72e15",
  storageBucket: "tech-tricks-72e15.appspot.com",
  messagingSenderId: "36451911700",
  appId: "1:36451911700:web:ab7fe171a3304ce5953f01",
  measurementId: "G-P56W76QR9P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
