import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = () => {
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
      </ul>
    </nav>
  );
};
