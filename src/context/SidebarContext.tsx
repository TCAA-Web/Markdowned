import { createContext, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { sidebarContentInterface } from "../types/sidebar";
import supabase from "../utils/supabase";

export const SidebarContext = createContext<any>(null);

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarData, setSidebarData] = useState<
    Array<sidebarContentInterface>
  >([]);
  const [uniqueCategories, setUniqueCategories] = useState<Array<string>>();

  async function getSidebarData() {
    const data = await supabase.from("files").select("category, title, id");
    let cleaned = data?.data
      ?.filter((el, index) => {
        if (index === data.data.findIndex((o) => el.category === o.category)) {
          return el;
        }
      })
      .map((el) => el.category);
    setSidebarData(() => data.data!);
    setUniqueCategories(() => cleaned);
  }

  useEffect(() => {
    console.log("Sidebar data", sidebarData);
    console.log("Unique Categories", uniqueCategories);
  }, [sidebarData, uniqueCategories]);

  return (
    <SidebarContext.Provider
      value={{
        getSidebarData,
        setSidebarData,
        sidebarData,
        uniqueCategories,
        setUniqueCategories,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
