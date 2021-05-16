import firebase from "../setup";
export const RegisterUser = async (auth) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(auth.email, auth.password);
    return user;
  } catch (error) {
    console.error("error during createUser", error.message);
  }
};
export const SignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
export const createUserProfile = async (user) => {
  const collectionRef = firebase.firestore().collection("users");
  const userDoc = collectionRef.doc(user.uid);
  const snapshot = await userDoc.get();
  if (!snapshot.exists) {
    const userData = {
      name: user?.displayName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      photoURL: user?.photoURL,
      uid: user?.uid,
    };
    return await userDoc.set(userData);
  }
};
export const getUser = async () => {
  const userAuth = firebase.auth()?.currentUser;
  const collectionRef = firebase.firestore().collection("users");
  const userDoc = collectionRef.doc(userAuth?.uid);
  const snapshot = await userDoc.get();
  return snapshot.data();
};
