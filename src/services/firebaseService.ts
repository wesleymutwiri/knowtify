import firebase from "firebase";

export async function register(
  username: string,
  email: string,
  password: string
) {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await response.user?.updateProfile({
      displayName: username
    });
    return response.user;
  } catch (e) {
    alert(e);
  }
}

export async function login(email: string, password: string) {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return response.user;
  } catch (e) {
    alert(e);
  }
}

export async function logout() {
  await firebase.auth().signOut();
}

// export function getLoggedInUser(initializationComplete) {
//   return new Promise((resolve, reject) => {
//     const initializationInterval = setInterval(() => {
//       if (initializationComplete) {
//         clearInterval(initializationInterval);
//         resolve(firebase.auth().currentUser);
//       }
//     }, 10);
//   });
// }

// export async function loginGoogle() {
//   try {
//     const response = await firebase
//       .auth()
//       .signInWithPopup(new firebase.auth.GoogleAuthProvider());
//     return response.user;
//   } catch (e) {
//     return alert(e);
//   }
// }
