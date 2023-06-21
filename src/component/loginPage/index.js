import React from "react";
import styles from "./style.module.scss";
import { BagRemoveOutline } from "react-ionicons";
import { MailOutline } from "react-ionicons";
const Login = () => {
  return (
    <div className={styles.form_box}>
      <div className={styles.form_value}>
        <form className={styles.formsec} action="">
          <h2>Login</h2>
          <div className={styles.inputbox}>
            <MailOutline color={"#00000"} height="30px" width="30px" />
            <input type="email" required />
            <label for="email">Email:</label>
          </div>
          <div className={styles.inputbox}>
            <BagRemoveOutline color={"#00000"} height="30px" width="30px" />
            <input type="password" required />
            <label for="password">Password:</label>
          </div>
          <div className="">
            <input type="checkbox" />
            <label for="rember">Rember Me</label>
            <a href="#">Forget Password</a>
          </div>
          <div>
            <button>Login in</button>
          </div>
          <div className="">
            <label for="regist">Don't have account ?</label>
            <a href="#">Regist</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
