import { useQuery } from "@tanstack/react-query";
import supabase from "../utils/supabase";
import { NoteDataInterface } from "../types/supabase";

export const getNoteByID = (id: string) => {
  const data = useQuery({
    queryKey: ["single_note", id],
    queryFn: async () => await supabase.from("files").select("*").eq("id", id),
  });
  return data;
};
