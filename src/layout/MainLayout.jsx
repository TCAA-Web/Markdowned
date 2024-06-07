import { useEffect } from "react";
import supabase from "../utils/supabase";
import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import { Navigation } from "../components/Navigation/Navigation";

export const MainLayout = () => {
  async function getData() {
    const data = await supabase.from("files").select("*");
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className={style.mainLayout}>
      <Navigation />
      <Outlet />
    </main>
  );
};
