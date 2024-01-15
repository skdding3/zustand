import { atom, useRecoilState } from "recoil";

const bearCounterState = atom({
  key: "bear",
  default: 0,
});

const Recoil = () => {
  const [bear, setBear] = useRecoilState(bearCounterState);
  const increaseBear = () => setBear(bear + 1);
  const removeAllBears = () => setBear(0);

  return (
    <>
      <h2 className="text-4xl">{bear}</h2>
      <button
        className="py-2 px-4 border bg-slate-100 rounded-md"
        onClick={() => increaseBear()}
      >
        Increase Bear
      </button>
      <button
        className="py-2 px-4 border bg-slate-100 rounded-md"
        onClick={() => removeAllBears()}
      >
        remove All Bear
      </button>
    </>
  );
};

export default Recoil;
