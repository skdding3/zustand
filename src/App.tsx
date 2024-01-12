import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AxiosQuery from "./pages/AxiosQuery";
import ReactQuery from "./pages/ReactQuery";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/axios-query" element={<AxiosQuery />} />
          <Route path="/react-query" element={<ReactQuery />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </>
  );
}

export default App;
