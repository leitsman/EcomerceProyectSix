import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEcomerceThunk } from "../store/slices/ApiEcomerce";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEcomerceThunk());
  }, []);
  const apiEcomerce = useSelector((state) => state.ApiEcomerce);
  return (
    <main className="mgten">
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
              <div className="products--add-icon">
                <i className="fa-solid fa-circle-plus fa-3x"></i>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
