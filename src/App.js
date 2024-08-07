/** @format */

import Nav from "./Component/Nav";
import MoviesLest from "./Component/MoviesLest";
import DitalesMovie from "./Component/DitalesMovie";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <HashRouter >
          <Routes>
            <Route path="/" element={<MoviesLest />} />
            <Route path="/movie/:id" element={<DitalesMovie />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
