import React from "react";
import { useState } from "react";
import styles from "./SignupForm.module.css";
import { useDispatch } from "react-redux";
import { setUserLoginState } from "../../redux/slice/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  //handle log in function
  const handleLogin = () => {
    if (!inputValue) {
      alert("Please enter a username");
      return;
    }
    dispatch(setUserLoginState({ username: inputValue }));
    setInputValue("");
    navigate("/home");
  };

  // useEffect
  useEffect(() => {
    if (inputValue !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);

  //Button styling classes
  const buttonClasses = `${styles.enter__button} ${
    isDisabled && styles.disabled
  }`;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.header}>Welcome to CodeLeap network!</h1>
        <label className={styles.label} htmlFor="nameInput">
          Please enter your username
        </label>
        <br />
        <input
          className={styles.input}
          type="text"
          id="nameInput"
          name="nameInput"
          placeholder="John Doe"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <br />
        <button
          disabled={isDisabled}
          onClick={handleLogin}
          className={buttonClasses}
        >
          enter
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
