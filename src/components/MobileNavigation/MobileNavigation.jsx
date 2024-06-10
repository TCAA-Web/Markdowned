import { NavLink } from "react-router-dom";
import style from "./MobileNavigation.module.scss";
import supabase from "../../utils/supabase";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { Burger } from "../Burger/Burger";

export const MobileNavigation = () => {
  const windowSize = useMediaQuery();
  let [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    let { error } = await supabase.auth.signOut();
    console.log(error);
  };

  return (
    <nav className={style.navbar}>
      <Burger setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={isOpen ? style.dropdown : style.hidden}>
        <ul>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/update">Update</NavLink>
          </li>
          <li>
            <NavLink to="/delete">Delete</NavLink>
          </li>
          <li>
            <NavLink to="/">Start</NavLink>
          </li>
          <li>
            <button onClick={() => logout()}>Log out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
