import stylex from "@stylexjs/stylex";

const style = stylex.create({
  button: {
    backgroundColor: "slate",
    color: "black",
    padding: "8px 8px",
    borderRadius: "5px",
  },
});

const StyleX = () => {
  return <button className={style("button")}>Click</button>;
};

export default StyleX;
