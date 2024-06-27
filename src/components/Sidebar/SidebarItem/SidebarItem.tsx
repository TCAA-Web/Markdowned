import { NavLink, redirect } from "react-router-dom";
import style from "./SidebarItem.module.scss";
import { SidebarItemInterface } from "../../../types/sidebar";

export const SidebarItem = ({ id, title }: SidebarItemInterface) => {
  return (
    <NavLink className={style.link} to={`/note/${id}`}>
      {title}
    </NavLink>
  );
};
