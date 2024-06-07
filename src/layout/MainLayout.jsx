import { useEffect } from "react";
import supabase from "../utils/supabase";
import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import { Navigation } from "../components/Navigation/Navigation";

export const MainLayout = () => {
  return (
    <main className={style.mainLayout}>
      <Navigation />
      <Outlet />
    </main>
  );
};
