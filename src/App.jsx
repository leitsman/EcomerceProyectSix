import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./page/Home";
import Product from "./page/Product";
import Purchases from "./page/Purchases";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <header className="header">
          <nav className="header--nav flex">
            <strong>e-comerce</strong>
            <ul className="header--ul-container flex">
              <li>
                <i className="fa-solid fa-user fa-2x"></i>
                <small>Login</small>
              </li>
              <li>
                <i className="fa-solid fa-box-archive fa-2x"></i>
                <small>Purchases</small>
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping fa-2x"></i>
                <small>Shop</small>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
        <footer className="footer flexColumn">
          <span>
            ACADEMLO x MDK <small>2022</small>
          </span>
          <ul className="footer--content-icons flex">
            <li>
              <i className="fa-brands fa-linkedin-in fa-2x"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube fa-2x"></i>
            </li>
          </ul>
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;
