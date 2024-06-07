import { useEffect } from "react";
import supabase from "../utils/supabase";

export const Home = () => {
  async function getData() {
    const data = await supabase.from("files").select("*");
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return <div>Welcome</div>;
};
