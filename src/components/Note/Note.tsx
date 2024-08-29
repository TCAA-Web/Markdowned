import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import ReactMarkdown from "react-markdown";
import { ButtonGroup, Divider, Link, Spinner } from "@nextui-org/react";
import { NoteContentInterface } from "../../types/note";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import supabase from "../../utils/supabase";
import { Suspense, useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../context/HomepageContext";

export const Note = ({ note }: NoteContentInterface) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const { getSidebarData } = useContext(SidebarContext);
  const { getAllData } = useContext(HomeContext);

  const navigate = useNavigate();

  const handleDeleteNote = async () => {
    try {
      const { error } = await supabase.from("files").delete().eq("id", note.id);
      if (error) {
        console.error("ERROR deleting note: ", error);
      }
      getSidebarData();
      getAllData();
      onClose();
      scrollTo(0, 0);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card isFooterBlurred style={{ width: "740px", minHeight: "600px" }}>
        <Suspense fallback={<Spinner />}>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-xl ">{note.category}</p>
              <p className="text-lg">{note.title}</p>
            </div>
          </CardHeader>
        </Suspense>
        <Divider />
        <Suspense fallback={<Spinner />}>
          <CardBody>
            {" "}
            <ReactMarkdown>{note.data}</ReactMarkdown>
          </CardBody>
        </Suspense>
        <Divider />

        <CardFooter className="flex flex-row space-x-2">
          <Button color="primary" variant="bordered">
            Edit
          </Button>
          <Button color="danger" variant="bordered" onPress={onOpen}>
            Delete
          </Button>{" "}
        </CardFooter>
      </Card>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete note?
              </ModalHeader>
              <ModalBody>
                <p>This action will delete the current note permanently</p>
                <p>
                  Are you sure you want to delete this note? This action cannot
                  be reveresed and is final!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={handleDeleteNote}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
