import { MdModeEditOutline } from "react-icons/md";
import { sidebarContentInterface } from "../../../types/sidebar";
import { IconType } from "react-icons";
import style from "./SidebarFolder.module.scss";
import { CiFolderOn } from "react-icons/ci";

interface sideBarFolderInterface {
  title: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const SidebarFolder = ({
  title,
  children,
  icon,
}: sideBarFolderInterface) => {
  return (
    <details className={style.folder} style={{ color: "white" }}>
      <summary>
        {" "}
        {icon ? icon : <CiFolderOn />} {title}
      </summary>
      {children}
    </details>
  );
};
