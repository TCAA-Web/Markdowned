import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Outlet } from "react-router-dom";

export const WithAuth = () => {
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

  if (!session) {
    return (
      <div style={{ width: "30vw", margin: "auto" }}>
        <div style={{ marginBottom: "5vh" }}>
          <h1>Welcome to Markdownee</h1>
          <h3>Please sign in to continue</h3>
        </div>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    );
  } else {
    return <Outlet />;
  }
};
