import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <main className={style.mainLayout}>
        <Outlet />
      </main>
    </>
  );
};
