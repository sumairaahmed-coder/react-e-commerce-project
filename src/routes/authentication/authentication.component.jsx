import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  const logInPopup = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page.</h1>

      <button onClick={logInPopup}>Sign In</button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
