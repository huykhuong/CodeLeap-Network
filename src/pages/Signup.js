import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/Signup/SignupForm";
import { selectUsername } from "../redux/slice/userSlice";

const Signup = () => {
  const username = useSelector(selectUsername);
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      navigate("/home");
    }
  }, [username]);

  return (
    <main>
      <SignupForm />
    </main>
  );
};

export default Signup;
