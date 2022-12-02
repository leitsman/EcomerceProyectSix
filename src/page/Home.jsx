import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCategoryThunk,
  getEcomerceThunk,
  getSearchThunk,
} from "../store/slices/ApiEcomerce.slice";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEcomerceThunk());
    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategory(res.data.data.categories));
  }, []);
  const apiEcomerce = useSelector((state) => state.ApiEcomerce);
  // ================= SEARCH INPUT =============
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <main className="mgten">
      <div className="content--filter-input">
        <div className="content--search">
          <input
            type="text"
            placeholder="Que buscas?"
            className="search--input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => dispatch(getSearchThunk(search))}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="fa-solid fa-filter"></i> Filters
            </Accordion.Header>
            <Accordion.Body>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Precio</Accordion.Header>
                  <Accordion.Body className="content--price flexColumn">
                    <div className="content--from-to flex">
                      <label htmlFor="from-price">from</label>
                      <input type="text" id="from-price" />
                    </div>
                    <div className="content--from-to flex">
                      <label htmlFor="to-price">to</label>
                      <input type="text" id="to-price" />
                    </div>
                    <button>filter price</button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>categoria</Accordion.Header>
                  <Accordion.Body>
                    <ul className="content--filter-ul flexColumn">
                      <li>
                        <button
                          onClick={() => dispatch(getEcomerceThunk())}
                          className="filter--item"
                        >
                          todos
                        </button>
                      </li>
                      {category.map((e) => (
                        <li key={e.id}>
                          <button
                            onClick={() => dispatch(getCategoryThunk(e.id))}
                            className="filter--item"
                          >
                            {e.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <ul className="products--container-ul grid">
        {apiEcomerce.map((e) => (
          <li className="products--item" key={e.id}>
            <Link className="products--item__link" to={`/product/${e.id}`}>
              <div className="products--img">
                <img
                  src={e.productImgs[0]}
                  alt={e.title}
                  className="products--img__one img--img"
                />
                <img
                  src={e.productImgs[1]}
                  alt={e.title}
                  className="products--img__two img--img"
                />
              </div>
              <div className="products--info flexColumn">
                <h4>{e.title}</h4>
                <span className="">Price:</span>
                <span>$ {e.price}</span>
              </div>
            </Link>
            <div className="products--add-icon">
              <i className="fa-solid fa-circle-plus fa-3x"></i>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
