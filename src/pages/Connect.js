import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./connect.scss";

const Connect = ({ setUser }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://marvelbackmihoub.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        console.log(response.data);
        navigate("/comics");
      }
    } catch (error) {
      console.log(error.response);
      if (!email && !password) {
        setErrorMessage("Make an effort!");
      }
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte !");
      }
      if (error.response.status === 406) {
        setErrorMessage("Bro, something's missing...!");
      }
    }
  };

  return (
    <div className="singupContainer">
      <div className="secondContainer">
        <h2 className="">Se connecter</h2>{" "}
        <form className="formContainer" onSubmit={onSubmitForm}>
          <input
            className="normalInput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input className="submitButton" type="submit" value="Connect!" />
          <p style={{ color: "red" }}>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default Connect;
