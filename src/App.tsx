import PaginaInicial from "./Components/PaginaInicial";
import Sobre from "./Components/Sobre/Sobre";
import Portfolio from "./Components/Portifolio";

import {HashRouter as Router ,Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/PaginaInicial" />}></Route>
      <Route
        path="/PaginaInicial"
        element={<PaginaInicial></PaginaInicial>}
      ></Route>
      <Route path="/Portifolio" element={<Portfolio></Portfolio>}></Route>
      <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
    </Routes>
    </Router>
  );
}
