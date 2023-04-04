import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SlideImage from "../components/SlideImage";
import { postCartThunk } from "../store/slices/cart.slice";
import { getEcomerceThunk } from "../store/slices/ApiEcomerce.slice";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ApiEcomerce);
  // ========== CALL API ==========
  useEffect(() => {
    dispatch(getEcomerceThunk());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  // =========== SELECTION TO PRODUCT =======
  const selectP = products.find((e) => e.id === Number(id));
  // ========== SIMILAR PRODUCTS ============
  const similarP = products.filter(
    (e) => e.category.name === selectP.category.name
  );
  const different = similarP.filter((e) => e.id !== Number(id));
  // ========== ADD PRODUCT ============
  const [AddProduct, setAddProduct] = useState(1);
  const add = () => setAddProduct(AddProduct + 1);
  const minus = () => {
    if (AddProduct !== 1) {
      setAddProduct(AddProduct - 1);
    }
  };
  const sendToCart = () => {
    const bodyCart = {
      productId: Number(id),
      quantity: AddProduct,
    };
    // console.log(bodyCart);
    dispatch(postCartThunk(bodyCart));
  };
  return (
    <>
      <main className="mgten main--content-product grid">
        <SlideImage images={selectP?.productImgs} />
        <div className="content--product-info">
          <h2>{selectP?.title}</h2>
          <p>{selectP?.description}</p>
          <div className="content--price-quan flex">
            <span>
              price: <br />
              <b>$ {selectP?.price}</b>
            </span>
            <span>
              Quantity
              <div className="content--quantity-product flex">
                <button onClick={minus}>-</button>
                <span>{AddProduct}</span>
                <button onClick={add}>+</button>
              </div>
            </span>
          </div>
          <button onClick={sendToCart}>
            Add to cart <i className="fa-solid fa-cart-arrow-down"></i>
          </button>
        </div>
      </main>
      <aside className="aside mgten">
        <h3>Similar products</h3>
        <ul className="products--container-ul grid">
          {different.map((e) => (
            <li className="products--item" key={e.id}>
              <Link
                className="products--item__link"
                to={`/product/${e.id}`}
                onClick={() => setAddProduct(1)}
              >
                <div className="products--img">
                  <img
                    src={e.productImgs[0].url}
                    alt={e.title}
                    className="products--img__one img--img"
                  />
                  <img
                    src={e.productImgs[1].url}
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
      </aside>
    </>
  );
};

export default Product;
