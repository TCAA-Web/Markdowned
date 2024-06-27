import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { Card } from "../components/Card/Card";

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
          <Card
            key={item.title + index}
            title={item.title}
            content={item.data}
          />
        );
      })}
    </>
  );
};
