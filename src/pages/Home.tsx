import { useContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Note } from "../components/Note/Note";
import { Divider } from "@nextui-org/react";
import { HomeContext } from "../context/HomepageContext";

export const Home = () => {
  const { allData } = useContext(HomeContext);

  return (
    <>
      {allData?.data?.map((item: any, index: number) => {
        return (
          <div key={item.id} className="pt-10">
            <Note note={item} />
            <Divider />
          </div>
        );
      })}
    </>
  );
};
