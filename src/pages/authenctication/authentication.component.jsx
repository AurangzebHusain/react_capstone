import { useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
} from "firebase/auth";
import React from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { useFormik } from "formik";
import "./authentication.styles.scss";

const AuthenticationPage = () => {
  return (
    <>
      <div className="form-container">
        <div className="sign-up-form">
          <SigninForm
            signInAuthWithEmailAndPassword={signInAuthWithEmailAndPassword}
            // afterRedirectResult={afterRedirectResult}
          ></SigninForm>
        </div>
        <div className="sign-up-form">
          <SignupForm></SignupForm>
        </div>
      </div>
    </>
  );
};
const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const createUserDocumentFromForm = async (form) => {
    //   const userDocRef = doc(db, "users", form.email);
    //   const userSnapShot = getDoc(userDocRef);
    const { displayName, email, password, confirm_password } = form;
    if (!email || !password) return;

    // const createdAt = new Date();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);

      await createUserDocumentFromAuth(user, {
        displayName,
      });
    } catch (e) {
      console.log("Error creating the user", e.message);
      throw e;
    }
  };
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      // we use the name to tell Formik which key of `values` to update
      [event.target.name]: event.target.value,
    }));
  };
  const formik = useFormik({
    handleChange: handleChange,
    initialValues: {
      email: "",
      password: null,
      confirm_password: null,
      displayName: "",
      isSubmitting: false,
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        await createUserDocumentFromForm(values);
      } catch (e) {
        alert(e.code);
      }
    },
  });
  return (
    <>
      <h2>I do not have an account</h2>
      <h4>Sign up with your email and password</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="displayName">Display Name</label>
        <input
          id="displayName"
          name="displayName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.displayName}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          id="confirm_password"
          name="confirm_password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirm_password}
        />

        <Button
          buttonType={"inverted"}
          label={"SIGN UP"}
          onClick={() => {
            console.log("Sign up button pressed");
          }}
        ></Button>
      </form>
    </>
  );
};

const SigninForm = ({ signInAuthWithEmailAndPassword }) => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    // console.log(response);
    // await createUserDocumentFromAuth(response.user);
  };

  //   const afterRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     await createUserDocumentFromAuth(response.user);
  //   };

  //   useEffect(() => {
  //     afterRedirectResult();
  //   }, []);
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      // we use the name to tell Formik which key of `values` to update
      [event.target.name]: event.target.value,
    }));
  };
  const formik = useFormik({
    handleChange: handleChange,
    initialValues: {
      email: "",
      password: null,
      confirm_password: null,
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const user = await signInAuthWithEmailAndPassword(values);
      } catch (e) {
        alert(e.code);
      }
    },
  });
  return (
    <>
      <h2>I already have an account</h2>
      <h4>Sign in with your email and password</h4>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button label={"SIGN IN"}></Button>
        <Button
          type="button"
          buttonType={"google"}
          label={"SIGN IN WITH GOOGLE"}
          onClick={logGoogleUser}
        ></Button>
      </form>
    </>
  );
};

export default AuthenticationPage;

const Button = ({
  buttonType,

  onClick,
  label,
  type = "submit",
}) => {
  const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
  };
  return (
    <button
      type={type}
      //   style={{ backgroundColor: backgroundColor, color: color }}
      className={
        buttonType == "google"
          ? BUTTON_TYPE_CLASSES.google
          : buttonType == "inverted"
          ? BUTTON_TYPE_CLASSES.inverted
          : ""
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
};
