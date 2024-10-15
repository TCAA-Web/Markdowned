import style from "./Title.module.scss";

interface TitleInterface {
  title: string;
  size: number;
  center: boolean;
}

export const Title = ({ title, size, center }: TitleInterface) => {
  return (
    <>
      <div
        style={
          center == true ? { textAlign: "center" } : { textAlign: "start" }
        }
        className={style.titleWrapper}
      >
        {size == 1 && <h1>{title}</h1>}
        {size == 2 && <h2>{title}</h2>}
        {size == 3 && <h3>{title}</h3>}
        {size == 4 && <h4>{title}</h4>}
        {size == 5 && <h5>{title}</h5>}
        {size == 6 && <h6>{title}</h6>}
      </div>
    </>
  );
};
