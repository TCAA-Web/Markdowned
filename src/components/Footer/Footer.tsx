import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footerStyle}>
      <div>
        <h4>links</h4>
        <ul>
          <li>somelink</li>
          <li>somelink</li>
          <li>somelink</li>
          <li>somelink</li>
        </ul>
      </div>
      <div>
        <h4>legal</h4>
        <ul>
          <li>somelink</li>
          <li>somelink</li>
          <li>somelink</li>
          <li>somelink</li>
        </ul>
      </div>
      <div>
        <h4>contact</h4>
        <ul>
          <li>somelink</li>
          <li>somelink</li>
          <li>somelink</li>
          <li>somelink</li>
        </ul>
      </div>
    </footer>
  );
};
