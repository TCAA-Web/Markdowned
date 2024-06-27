import { Dispatch, useState } from "react";
import React from "react";
import style from "./Burger.module.scss";

interface BurgerInterface {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export const Burger = ({ setIsOpen, isOpen }: BurgerInterface) => {
  return (
    <>
      <div
        id="burger"
        className={isOpen ? style.burger_menu_collapsed : style.burger_menu}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
