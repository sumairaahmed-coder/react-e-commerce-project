import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const GoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    setCurrentUser(user);
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserFromEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found, Check if you have signed in");
          break;
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        default:
          console.log(error);
      }
    }
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={changeHandler}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={changeHandler}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button onClick={GoogleSignIn} buttonType="google" type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
