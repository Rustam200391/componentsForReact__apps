import React, { useState } from "react";
import style from "./Passgenerate.module.css";

const Passgenerate = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const length = 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div>
      <h2> Pass generate</h2>
      <div className={style.password__generator}>
        <input type="text" value={password} readOnly />
        <button onClick={generatePassword}>Генерировать</button>
      </div>
    </div>
  );
};

export default Passgenerate;

// // хук useState, чтобы хранить значение пароля в состоянии компонента. Когда вы нажимаете кнопку "Генерировать", вызывается функция generatePassword, которая генерирует новый пароль и обновляет состояние password с помощью функции setPassword. Это автоматически вызывает перерисовку компонента, отображая новый сгенерированный пароль.
