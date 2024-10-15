import { useContext, useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Outlet } from "react-router-dom";
import style from "../MainLayout/MainLayout.module.scss";
import { CookieBanner } from "../../components/CookieBanner/CookieBanner";
import { HomeContext } from "../../context/HomepageContext";
import ReactGA from "react-ga4";

export const WithAuth = () => {
  const { cookieAccept } = useContext(HomeContext);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Tjek om cookieAccept er sat til true før Google Analytics starter
  if (cookieAccept === true) {
    ReactGA.initialize([
      {
        trackingId: "G-YTQRSQPW5B",
      },
    ]);
  }

  if (!session) {
    return (
      <main className={style.mainLayout}>
        <div style={{ width: "30vw", margin: "auto" }}>
          <div style={{ marginBottom: "5vh" }}>
            <h1>Welcome to Markdownee</h1>
            <h3>Please sign in to continue</h3>
          </div>
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        </div>
        <CookieBanner />
      </main>
    );
  } else {
    return <Outlet />;
  }
};
