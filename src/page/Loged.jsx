import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Loged = () => {
  const dateLocalUser = localStorage.getItem("userDate");
  const userDate = JSON.parse(dateLocalUser);
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <div className="login--content-loged flexColumn">
      <div className="login--icon-user flexColumn">
        <i className="fa-regular fa-user fa-3x"></i>
      </div>
      <span>
        {userDate?.firstName} {userDate?.lastName}
      </span>
      <span>{userDate?.email}</span>
      <button onClick={() => logOut()}>Log out</button>
    </div>
  );
};

export default Loged;
