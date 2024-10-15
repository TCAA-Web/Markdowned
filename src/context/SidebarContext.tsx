import { createContext, useEffect, useState } from "react";
import { sidebarContentInterface } from "../types/sidebar";
import supabase from "../utils/supabase";

export const SidebarContext = createContext<any>(null);

export const SideBarContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [sidebarData, setSidebarData] = useState<
    Array<sidebarContentInterface>
  >([]);
  const [uniqueCategories, setUniqueCategories] = useState<Array<string>>([]);

  async function getSidebarData() {
    const { data, error } = await supabase
      .from("files")
      .select("category, title, id");

    setSidebarData(data!);
  }

  const getCategories = () => {
    let cleaned = sidebarData
      ?.filter((el: any, index: number) => {
        if (
          index ===
          sidebarData.findIndex((o: any) => el.category === o.category)
        ) {
          return el;
        }
      })
      .map((el: any) => el.category);
    if (cleaned) {
      setUniqueCategories(cleaned);
    } else {
      setUniqueCategories(["No data yet"]);
    }
  };

  useEffect(() => {
    if (sidebarData.length === 0) {
      console.log("GETTING SIDEBAR DATA");
      getSidebarData();
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, [sidebarData]);

  return (
    <SidebarContext.Provider
      value={{
        sidebarData,
        setSidebarData,
        uniqueCategories,
        setUniqueCategories,
        getSidebarData,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
