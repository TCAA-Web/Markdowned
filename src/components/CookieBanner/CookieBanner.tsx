import { useContext } from "react";
import { HomeContext } from "../../context/HomepageContext";
import style from "./CookieBanner.module.scss";
import { ButtonGroup, Button } from "@nextui-org/react";

export const CookieBanner = () => {
  const { cookieAccept, setCookieAccept } = useContext(HomeContext);

  const handleAccept = () => {
    setCookieAccept(true);
  };

  const handleDeny = () => {
    setCookieAccept(false);
  };

  return (
    cookieAccept === undefined && (
      <div className={style.cookieBanner}>
        <p>
          This site uses cookies to improve the user experience. If you are okay
          with cookies; click accept. Otherwise if you prefer to opt out, please
          click deny.
        </p>
        <ButtonGroup>
          <Button onClick={handleAccept}>Accept</Button>
          <Button onClick={handleDeny}>Deny</Button>
        </ButtonGroup>
      </div>
    )
  );
};
