import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./singup.scss";

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://marvelbackmihoub.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );
      if (response.data) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
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
        <h2 className="">Become a champ!</h2>
        <form className="formContainer" onSubmit={onSubmitForm}>
          <input
            className="normalInput"
            type="Username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
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

          <input className="submitButton" type="submit" value="Submit!" />
          <p style={{ color: "red" }}>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
