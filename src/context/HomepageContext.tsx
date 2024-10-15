import { createContext, useEffect, useState } from "react";
import { sidebarContentInterface } from "../types/sidebar";
import supabase from "../utils/supabase";

export const HomeContext = createContext<any>(null);

export const HomeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [allData, setAllData] = useState<any>();
  const [cookieAccept, setCookieAccept] = useState<boolean | undefined>(
    undefined
  );

  async function getAllData() {
    const data = await supabase.from("files").select("*");
    setAllData(data);
  }

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    console.log(allData);
  }, [allData]);

  return (
    <HomeContext.Provider
      value={{
        allData,
        getAllData,
        cookieAccept,
        setCookieAccept,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
