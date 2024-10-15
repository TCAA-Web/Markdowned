import { useQuery } from "@tanstack/react-query";
import supabase from "../utils/supabase";

export const getAllNotes = () => {
  let { data } = useQuery({
    queryKey: ["allNotes", "notes"],
    queryFn: async () => await supabase.from("files").select("*"),
  });
  return data;
};
