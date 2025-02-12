import { BrowserRouter, Route, Routes } from "react-router";
import Mf2 from "./components/mf2";
import { Provider } from "react-redux";
import store from "./store/store";

export default function Root(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mf2 />} />
          <Route path="/settings" element={<Mf2 />} />
          <Route path="/mf2" element={<Mf2 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
