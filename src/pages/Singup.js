import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./singup.scss";

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

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
          newsletter: newsLetter,
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
    }
  };

  return (
    <div className="">
      <div className="">
        <h2 className="">S'inscrire</h2>
        <form onSubmit={onSubmitForm}>
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
          <input
            className="checkbox"
            type="checkbox"
            value={newsLetter}
            onChange={(event) => {
              setNewsLetter(event.target.checked);
            }}
          />
          <div className="checkBoxAndText">
            <span>S'inscrire à notre newsletter (même s'il n'y en a pas)</span>
          </div>
          <input className="submitButton" type="submit" value="S'inscrire" />
          <p style={{ color: "red" }}>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
