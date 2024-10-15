import { useContext } from "react";
import { Note } from "../components/Note/Note";
import { Divider } from "@nextui-org/react";
import Reactlogo from "../assets/react.svg";
import { HomeContext } from "../context/HomepageContext";

export const Home = () => {
  const { allData } = useContext(HomeContext);

  return (
    <>
      {allData?.data?.map((item: any, index: number) => {
        return (
          <div key={item.id} className="pt-10">
            <img src={Reactlogo} style={{ width: "100%" }} />
            <Note note={item} />
            <Divider />
          </div>
        );
      })}
    </>
  );
};
