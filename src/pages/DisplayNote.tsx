import supabase from "../utils/supabase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NoteDataInterface } from "../types/supabase";
import { Note } from "../components/Note/Note";

export const DisplayNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState<NoteDataInterface>();

  useEffect(() => {
    async function getNote() {
      try {
        const { data, error } = await supabase
          .from("files")
          .select("*")
          .eq("id", id);
        if (data && !error) {
          console.log("RAW DATA", data);
          setNote(data[0]!);
        } else if (error) {
          console.error("ERROR: ", error);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getNote();
  }, [id]);

  useEffect(() => {
    console.log(note);
  }, [note]);

  return note && <Note note={note} />;
};
