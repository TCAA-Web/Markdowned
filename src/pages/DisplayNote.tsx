import { useParams } from "react-router-dom";
import supabase from "../utils/supabase";
import { useEffect, useState } from "react";
import { NoteDataInterface } from "../types/supabase";
import { Card } from "../components/Card/Card";

export const DisplayNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState<NoteDataInterface>();

  useEffect(() => {
    async function getNote() {
      const data = await supabase.from("files").select("*").eq("id", id);
      if (data && data.data) {
        setNote(data.data[0]!);
      }
    }
    getNote();
  }, [id]);

  useEffect(() => {
    console.log(note);
  }, [note]);

  return note && <Card title={note.title} content={note?.data} />;
};
