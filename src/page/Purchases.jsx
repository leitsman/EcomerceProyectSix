import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccess } from "../store/slices/access";

const Purchases = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAccess());
  }, []);
  return <div></div>;
};

export default Purchases;
