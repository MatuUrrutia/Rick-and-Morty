import { useState } from "react";
import style from "./LoginForm.module.css";
import validation from "./Validation";

export default function LoginForm({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form className={style.container} onSubmit={submitHandler}>
      <h2 className={style.cardHeader}> Bienvenidos </h2>

      <h1 className={style.tituloPag}> Rick and Morty </h1>
      <div>
        <div>
          <label className={style.label} htmlFor="username">
            Username:
          </label>
          <input
            className={style.inputBox}
            type="text"
            placeholder="Ingresa tu email"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <p className={style.errors}>{errors.username}</p>
        </div>

        <div>
          <label className={style.label} htmlFor="password">
            Password:
          </label>
          <input
            className={style.inputBox}
            type="text"
            placeholder="Ingresa tu password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p className={style.errors}>{errors.password}</p>
        </div>

        <button className={style.button}>Login</button>
      </div>
    </form>
  );
}
