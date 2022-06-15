import { FIREBASE_STORAGE_PATH } from "constants/firebase";

export const makeFirebaseStoragePath = (path: string) => `${FIREBASE_STORAGE_PATH}${path}`;
