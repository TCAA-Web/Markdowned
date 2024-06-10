import { useState } from "react";
import style from "./Burger.module.scss";

export const Burger = ({ setIsOpen, isOpen }) => {
  return (
    <div className={style.burger_container}>
      <div
        id="burger"
        className={isOpen ? style.burger_menu_collapsed : style.burger_menu}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
