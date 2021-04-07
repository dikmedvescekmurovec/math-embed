import firebase from "firebase/app";
import "firebase/firestore";

/**
 * Returns the equation in text form from the database
 * @param id Id of the equation
 */
export const getEquation = async (id: string): Promise<string | undefined> => {
  const docRef = firebase.firestore().collection("equations").doc(id);
  const doc = await docRef.get();

  const { equation } = doc.data() ?? {};

  return equation;
};

/**
 * Returns the id of the saved equation
 * @param equation Equation in text format
 */
export const saveEquation = async (equation: string): Promise<string> => {
  const res = await firebase.firestore().collection("equations").add({
    equation,
  });
  return res.id;
};
