import React, { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

export function Create() {
  const [value, setValue] = useState<string | undefined>("Hello world!");

  const submitData = async () => {
    try {
      const { data } = await supabase.from("files").insert([{ data: value }]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editorStyles = {
    width: "968px",
    padding: "0",
    backgroundColor: "unset",
    borderRadius: "16px",
  };

  return (
    <div>
      <h1>Create</h1>
      <MDEditor
        height={"90vh"}
        draggable="false"
        style={{ ...editorStyles }}
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      <button onClick={() => submitData}>Submit</button>
    </div>
  );
}
