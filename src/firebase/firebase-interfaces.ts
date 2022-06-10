import { Analytics } from "firebase/analytics";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

export interface FirebaseInstances {
  analytics: Analytics;
  firestore: Firestore;
  auth: Auth;
}
