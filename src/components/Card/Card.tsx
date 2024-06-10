import style from "../Card/Card.module.scss";
import ReactMarkdown from "react-markdown";

interface CardInterface {
  title: string;
  content: string;
}

export const Card = ({ title, content }: CardInterface) => {
  return (
    <div className={style.cardStyle}>
      <header>
        <h3>{title}</h3>
      </header>
      <section>
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </div>
  );
};
