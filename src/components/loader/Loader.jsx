import React from "react";
import style from "./style.module.css"; // Подключаем файл стилей

const Loader = () => {
  return (
    <div className={style.loader__container}>
      <div className={style.sniper__loader}>
        {/* Анимированный индикатор загрузки */}
        <div className={style.sniper__bar}></div>
      </div>
    </div>
  );
};

export default Loader;
