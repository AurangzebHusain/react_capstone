import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const AuthenticationPage = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    await createUserDocumentFromAuth(response.user);
  };

  return (
    <>
      <button onClick={logGoogleUser}> Sign in with google</button>
    </>
  );
};

export default AuthenticationPage;
