import React, { useContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { SidebarContext } from "../context/SidebarContext";

export function CreateNote() {
  const [value, setValue] = useState<string | undefined>("Hello world!");
  const [title, setTitle] = useState<string | undefined>("");
  const [category, setCategory] = useState<string | undefined>("category");

  const { getSidebarData } = useContext(SidebarContext);

  const submitData = async () => {
    try {
      const { data } = await supabase
        .from("files")
        .insert([{ data: value, title: title, category: category }]);
      console.log(data);
      getSidebarData();
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
      <input
        type="text"
        placeholder="Title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      ></input>
      <input
        type="text"
        placeholder="Category"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCategory(e.target.value);
        }}
      ></input>
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
      <button onClick={() => submitData()}>Submit</button>
    </div>
  );
}
