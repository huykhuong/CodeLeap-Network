import React from "react";
import { useDispatch } from "react-redux";
import { setUserSignOut } from "../../redux/slice/userSlice";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUserSignOut());
  };

  return (
    <header className={styles.header__container}>
      <h1 className={styles.title}>CodeLeap Network</h1>
      <div onClick={handleLogout} className={styles.logout__btn}>
        Logout
      </div>
    </header>
  );
};

export default Header;
