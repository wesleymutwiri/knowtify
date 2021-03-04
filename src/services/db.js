import firebase from "firebase";
import "firebase/firestore";

export const db = firebase
  .initializeApp({ projectId: "knowtify-io" })
  .firestore();

const { Timestamp, GeoPoint } = firebase.firestore();
export { Timestamp, GeoPoint };

db.settings({ timestampInSnapshots: true });
