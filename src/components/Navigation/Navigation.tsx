import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";
import supabase from "../../utils/supabase";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useEffect } from "react";
import { Burger } from "../Burger/Burger";

export const Navigation = () => {
  const logout = async () => {
    let { error } = await supabase.auth.signOut();
    console.log(error);
  };

  return (
    <nav className={style.navbar}>
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
    </nav>
  );
};
