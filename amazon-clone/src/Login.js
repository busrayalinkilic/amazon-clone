import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Giriş Yap</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Şifre</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Giriş Yap
          </button>
        </form>

        <p>
          Oturum açarak, Amazon'un Kullanım ve Satış Koşulları'nı kabul etmiş
          olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğine
          ilişkin detaylı bilgi için Gizlilik Bildirimi, Çerez Bildirimi ve İlgi
          Alanına Dayalı Tanıtımları inceleyebilirsiniz.
        </p>

        <button onClick={register} className="login__registerButton">Amazon hesabınızı oluşturun</button>
      </div>
    </div>
  );
}

export default Login;
