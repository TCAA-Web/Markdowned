import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Note } from "../components/Note/Note";
import { Divider } from "@nextui-org/react";

export const Home = () => {
  const [dataArr, setDataArr] = useState<any>();

  async function getData() {
    const data = await supabase.from("files").select("*");
    setDataArr(data);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(dataArr);
  }, [dataArr]);

  return (
    <>
      {dataArr?.data?.map((item: any, index: number) => {
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
