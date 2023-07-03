import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logInPopup = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page.</h1>
      <button onClick={logInPopup}>Sign In</button>
    </div>
  );
};

export default SignIn;
