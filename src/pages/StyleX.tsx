import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    backgroundColor: "gray",
    color: "black",
    padding: "8px 8px",
    borderRadius: "5px",
  },
});

const StyleX = () => {
  return (
    <div className="flex gap-5">
      <button {...stylex.props(styles.button)}>Click</button>
      <button className=" bg-[#808080] py-2 px-2 rounded">Click</button>
    </div>
  );
};

export default StyleX;
