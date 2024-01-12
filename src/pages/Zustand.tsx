import { useBearStore } from "../store/store";

const Zustand = () => {
  // STATE
  const { bears, increaseBear, removeAllBears } = useBearStore();

  return (
    <>
      <h2 className="text-4xl">{bears}</h2>
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

export default Zustand;
