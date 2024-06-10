import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MobileNavigation } from "../../components/MobileNavigation/MobileNavigation";

export const MainLayout = () => {
  const windowSize = useMediaQuery();
  return (
    <>
      {windowSize > 768 ? <Navigation /> : <MobileNavigation />}
      <main className={style.mainLayout}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
