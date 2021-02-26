import initFirebase from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const getEquation = async (id: string): Promise<string | undefined> => {
  initFirebase();

  const docRef = firebase.firestore().collection("equations").doc(id);
  const doc = await docRef.get();

  const { equation } = doc.data() ?? {};

  return equation;
};