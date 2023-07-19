import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const GoogleSignIn = async () => {
    await signInWithGooglePopup();
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserFromEmailAndPassword(email, password);
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
          <Button
            onClick={GoogleSignIn}
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
