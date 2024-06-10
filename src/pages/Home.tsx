import { useEffect } from "react";
import supabase from "../utils/supabase";
import { Card } from "../components/Card/Card";

export const Home = () => {
  async function getData() {
    const data = await supabase.from("files").select("*");
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  let mdContent = `__This is markdown__ \n Its all *fine* and  being rendered correctly with react-markdown`;

  return (
    <>
      <Card title={"Hello world"} content={mdContent} />
      <Card title={"Hello world"} content={mdContent} />
      <Card title={"Hello world"} content={mdContent} />
      <Card title={"Hello world"} content={mdContent} />
    </>
  );
};
