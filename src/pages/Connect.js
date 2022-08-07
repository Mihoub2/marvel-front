import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./connect.scss";

const Connect = ({ setUser }) => {
  const navigate = useNavigate();

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
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="">
      <div className="">
        <h2 className="">Se connecter</h2>{" "}
        <form onSubmit={onSubmitForm}>
          <input
            className=""
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            className=""
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input className="" type="submit" value="Se connecter" />
        </form>
      </div>
    </div>
  );
};

export default Connect;
