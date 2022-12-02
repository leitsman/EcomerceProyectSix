import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./page/Home";
import Product from "./page/Product";
import Purchases from "./page/Purchases";
import Login from "./page/Login";
import Cart from "./components/Cart";
import { useState } from "react";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {
  const [windowCart, setWindowCart] = useState(false);
  const loader = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <div className="App">
        {loader && <Loader />}
        <header className="header">
          <nav className="header--nav flex">
            <Link className="ecomerce--link-home" to={`/`}>
              <strong>e-comerce</strong>
            </Link>
            <ul className="header--ul-container flex">
              <Link className="links--header" to={`/login`}>
                <li>
                  <i className="fa-solid fa-user fa-2x"></i>
                  <small>Login</small>
                </li>
              </Link>
              <Link className="links--header" to={`/purchases`}>
                <li>
                  <i className="fa-solid fa-box-archive fa-2x"></i>
                  <small>Purchases</small>
                </li>
              </Link>
              <li
                className="links--header"
                onClick={() => setWindowCart(!windowCart)}
              >
                <i className="fa-solid fa-cart-shopping fa-2x"></i>
                <small>Shop</small>
              </li>
            </ul>
          </nav>
        </header>
        {windowCart && (
          <Cart setWindowCart={setWindowCart} windowCart={windowCart} />
        )}
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
            ACADEMLO <br />
            <small>2022</small>
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
      </div>
    </HashRouter>
  );
}

export default App;
