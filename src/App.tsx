import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AxiosQuery from "./pages/AxiosQuery";
import ReactQuery from "./pages/ReactQuery";
import { ReactQueryDevtools } from "react-query/devtools";
import Zustand from "./pages/Zustand";
import Recoil from "./pages/Recoil";
import StyleX from "./pages/StyleX";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/axios-query" element={<AxiosQuery />} />
          <Route path="/react-query" element={<ReactQuery />} />
          <Route path="/zustand" element={<Zustand />} />
          <Route path="/recoil" element={<Recoil />} />
          <Route path="/stylex" element={<StyleX />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </>
  );
}

export default App;
