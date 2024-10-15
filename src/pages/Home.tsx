import { useContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Note } from "../components/Note/Note";
import { Divider } from "@nextui-org/react";

import { getAllNotes } from "../queries/getAllNotes";
import Reactlogo from "../assets/react.svg";

export const Home = () => {
  const [dataArr, setDataArr] = useState<any>();

  const data = getAllNotes();

  /*   useEffect(() => {
    console.log(dataArr);
  }, [dataArr]); */

  return (
    <>
      {data?.data?.map((item: any, index: number) => {
import { HomeContext } from "../context/HomepageContext";

export const Home = () => {
  const { allData } = useContext(HomeContext);

  return (
    <>
      {allData?.data?.map((item: any, index: number) => {
        return (
          <div key={item.id} className="pt-10">
            <img src={Reactlogo} style={{ width: "100%;" }} />
            <Note note={item} />
            <Divider />
          </div>
        );
      })}
    </>
  );
};
