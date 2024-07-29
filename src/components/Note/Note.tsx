import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import ReactMarkdown from "react-markdown";
import { Divider, Link } from "@nextui-org/react";
import { NoteContentInterface } from "../../types/note";

export const Note = ({ note }: NoteContentInterface) => {
  return (
    <Card
      isFooterBlurred
      style={{ minWidth: "740px", maxWidth: "960px", minHeight: "600px" }}
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-xl ">{note.category}</p>
          <p className="text-lg">{note.title}</p>
        </div>
      </CardHeader>
      <Divider />

      <CardBody>
        {" "}
        <ReactMarkdown>{note.data}</ReactMarkdown>
      </CardBody>
      <Divider />

      <CardFooter>
        <Link showAnchorIcon href={`/update/${note.id}`}>
          Edit note
        </Link>
        <Link showAnchorIcon href={`/delete/${note.id}`}>
          Delete note
        </Link>
      </CardFooter>
    </Card>
  );
};
