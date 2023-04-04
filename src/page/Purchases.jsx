import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateConvert from "../components/DateConvert";
import PurchaseInfo from "../components/PurchaseInfo";
import { getAccessThunk } from "../store/slices/access.slice";

const Purchases = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccessThunk());
  }, []);
  const access = useSelector((state) => state.access);
  // console.log(access);
  return (
    <main className="purchases mgten">
      <h2>Tu historial de compras</h2>
      <ul className="purchases--content-list flexColumn">
        {access.map((e) => (
          <li key={e.id} className="purchase--item">
            <DateConvert date={e.createdAt} />
            <PurchaseInfo info={e.product} quantity={e.quantity} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Purchases;
