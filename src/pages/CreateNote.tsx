import React, { useContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { Divider, Input, Spacer, Button } from "@nextui-org/react";
import { Title } from "../components/Title/Title";

export function CreateNote() {
  const [value, setValue] = useState<string | undefined>("Hello world!");
  const [title, setTitle] = useState<string | undefined>("");
  const [category, setCategory] = useState<string | undefined>("category");

  const submitData = async () => {
    try {
      const { data } = await supabase
        .from("files")
        .insert([{ data: value, title: title, category: category }]);
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
      <Title center={true} size={4} title={"Create new note"} />
      <Spacer x={16} />
      <Input
        type="text"
        placeholder="Title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      ></Input>
      <Spacer x={4} />
      <Input
        type="text"
        width={12}
        placeholder="Category"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCategory(e.target.value);
        }}
      ></Input>
      <Spacer x={1} />
      <Divider />
      <MDEditor
        height={"70vh"}
        draggable="false"
        style={{ ...editorStyles }}
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      <Spacer x={4} />
      <Button onClick={() => submitData()}>Submit</Button>
    </div>
  );
}
