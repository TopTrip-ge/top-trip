import { QuerySnapshot } from "firebase/firestore";

export const collectDataFromCollection = <T>(collection?: QuerySnapshot<T>) =>
  collection?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) ?? [];
