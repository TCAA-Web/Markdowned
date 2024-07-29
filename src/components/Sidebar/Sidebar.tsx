import { useNavigate } from "react-router-dom";
import style from "./Sidebar.module.scss";
import supabase from "../../utils/supabase";
import { useEffect, useState } from "react";
import { Burger } from "../Burger/Burger";
import { routes } from "../../routes/routes";
import { sidebarContentInterface } from "../../types/sidebar";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export const Sidebar = () => {
  const [sidebarData, setSidebarData] = useState<
    Array<sidebarContentInterface>
  >([]);

  const [uniqueCategories, setUniqueCategories] = useState<Array<string>>([]);
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    let { error } = await supabase.auth.signOut();
    console.log(error);
  };

  useEffect(() => {
    console.log("Sidebar data", sidebarData);
    console.log("Unique Categories", uniqueCategories);
  }, [sidebarData, uniqueCategories]);

  useEffect(() => {
    async function getSidebarData() {
      const data = await supabase.from("files").select("category, title, id");
      let cleaned = data?.data
        ?.filter((el, index) => {
          if (
            index === data.data.findIndex((o) => el.category === o.category)
          ) {
            return el;
          }
        })
        .map((el) => el.category);
      setSidebarData(data.data!);
      if (cleaned) {
        setUniqueCategories(cleaned);
      } else {
        setUniqueCategories(["No data yet"]);
      }
    }

    if (sidebarData.length === 0) {
      console.log("GETTING SIDEBAR DATA");

      getSidebarData();
    }
  }, []);

  const navigate = useNavigate();

  // TODO - START REPLACING EVERY UI PART WITH NEXT UI

  return (
    <nav className={style.navbar}>
      <Card className={isOpen ? style.dropdown : style.hidden}>
        <div className={style.burger_container}>
          <Burger setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        {isOpen && (
          <>
            <Listbox
              items={routes}
              aria-label={"Menu"}
              onAction={(key) => {
                navigate(`${key}`);
              }}
            >
              {(item) => <ListboxItem key={item.url}>{item.title}</ListboxItem>}
            </Listbox>

            <Accordion>
              {uniqueCategories?.map((uniqueCat: string, index: number) => {
                return (
                  <AccordionItem title={uniqueCat} key={uniqueCat + index}>
                    {sidebarData?.map((content: sidebarContentInterface) => {
                      if (content.category == uniqueCat) {
                        return (
                          <Link
                            aria-labelledby={content.title}
                            key={content.id}
                            style={{ width: "100%" }}
                            isBlock
                            showAnchorIcon
                            color="foreground"
                            href={`/note/${content.id}`}
                          >
                            {content.title}
                          </Link>
                        );
                      }
                    })}
                  </AccordionItem>
                );
              })}
            </Accordion>
            <button onClick={() => logout()}>Log out</button>
          </>
        )}
      </Card>
    </nav>
  );
};
