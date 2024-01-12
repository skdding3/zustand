import { useBearStore } from "../store/store";

const Zustand = () => {
  // STATE
  const { bears, increaseBears, removeAllBears } = useBearStore();

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-4xl">{bears}</h2>
        <button onClick={increaseBears}>Increase Bear</button>
        <button onClick={removeAllBears}>remove All Bear</button>
      </div>
    </>
  );
};

export default Zustand;
