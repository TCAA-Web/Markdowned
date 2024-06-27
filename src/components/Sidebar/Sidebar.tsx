import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";
import supabase from "../../utils/supabase";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useContext, useEffect, useState } from "react";
import { Burger } from "../Burger/Burger";
import { routes } from "../../routes/routes";
import { SidebarFolder } from "./SidebarFolder/SidebarFolder";
import { SidebarItem } from "./SidebarItem/SidebarItem";
import { sidebarContentInterface } from "../../types/sidebar";
import { SidebarContext } from "../../context/SidebarContext";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { getSidebarData, sidebarData, uniqueCategories } =
    useContext(SidebarContext);

  const logout = async () => {
    let { error } = await supabase.auth.signOut();
    console.log(error);
  };

  useEffect(() => {
    getSidebarData();
  }, []);

  // TODO: Add category to supabase and create a system for automatically createing new folders from categories
  /*   useEffect(() => {
    console.log("categories : ", uniqueCategories);
    console.log("sidebarData", sidebarData);
  }, [uniqueCategories]); */

  return (
    <nav className={style.navbar}>
      <div className={style.burger_container}>
        <Burger setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className={isOpen ? style.dropdown : style.hidden}>
        <ul>
          {routes.map((item) => {
            return <NavLink to={item.url}>{item.title}</NavLink>;
          })}

          {uniqueCategories?.map((uniqueCat: string, index: number) => {
            return (
              <SidebarFolder key={uniqueCat + index} title={uniqueCat}>
                {sidebarData?.map((content: sidebarContentInterface) => {
                  if (content.category == uniqueCat) {
                    return (
                      <SidebarItem title={content.title} id={content.id} />
                    );
                  }
                })}
              </SidebarFolder>
            );
          })}
          <li>
            <button onClick={() => logout()}>Log out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
