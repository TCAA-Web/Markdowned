import { useEffect } from "react";
import supabase from "../utils/supabase";
import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main className={style.mainLayout}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
