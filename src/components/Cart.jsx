import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delCartThunk,
  getCartThunk,
  postCheckoutThunk,
} from "../store/slices/cart.slice";

const Cart = ({ setWindowCart, windowCart }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);
  const userCart = useSelector((state) => state.userCart);
  // console.log(userCart);
  return (
    <div className="cart">
      <i
        className="fa-solid fa-circle-xmark fa-2x cart--icon-exit"
        onClick={() => setWindowCart(!windowCart)}
      ></i>
      <h3>carro de compras</h3>
      <ul className="cart--content flexColumn">
        {userCart.map((e) => (
          <li className="cart--item" key={e.id}>
            <span className="cart--title">{e.product.title}</span>
            <div className="cart--title-quan flex">
              <small>
                subtotal:
                <b> $ {e.product.price * e.quantity}</b>
              </small>
              <small>cantidad: {e.quantity}</small>
              <i
                className="fa-solid fa-trash"
                onClick={() => dispatch(delCartThunk(e.id))}
              ></i>
            </div>
          </li>
        ))}
      </ul>
      <div className="">
        total: $
        {userCart.reduce((acc, e) => acc + e.product.price * e.quantity, 0)}
      </div>
      <button onClick={() => dispatch(postCheckoutThunk())}>
        Comprar productos
      </button>
    </div>
  );
};

export default Cart;
