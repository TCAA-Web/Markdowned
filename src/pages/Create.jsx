import React, { useEffect } from "react";
import supabase from "../utils/supabase";

export function Create() {
  async function insert() {
    let json_data = {
      type: "md",
      content:
        "## Hello world! \n _this is a comment_ \n **also this is a test**",
      date: `${Date.now()}`,
    };

    const { data, error } = await supabase
      .from("files")
      .insert([{ data: JSON.stringify(json_data) }]);

    console.log("error", error);
    console.log("data", data);
  }

  useEffect(() => {
    console.log("Inserting in DB...");
    insert();
  }, []);

  return <div>Create</div>;
}
