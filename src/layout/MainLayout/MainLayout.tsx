import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import { Footer } from "../../components/Footer/Footer";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import {
  SidebarContext,
  SidebarContextProvider,
} from "../../context/SidebarContext";

export const MainLayout = () => {
  return (
    <>
      <SidebarContextProvider>
        <Sidebar />
        <main className={style.mainLayout}>
          <Outlet />
        </main>
        <Footer />
      </SidebarContextProvider>
    </>
  );
};
