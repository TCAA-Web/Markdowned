import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookieBanner } from "../../components/CookieBanner/CookieBanner";

export const MainLayout = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 120000 } },
  });

  return (
    <>
      <Sidebar />
      <main className={style.mainLayout}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <Outlet />
        </QueryClientProvider>
      </main>
    </>
  );
};
