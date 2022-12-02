import React from "react";

const PurchaseInfo = ({ info }) => {
  // console.log(info[0]?.id);
  return (
    <div className="purchase--info">
      <ul className="purchase--content-ul flexColumn">
        {info.map((e) => (
          <li key={e.id} className="flex purchase--item-info">
            <small>
              {e.title} <br />
              <span>Cantidad: {e.productsInCart.quantity}</span>
            </small>
            <span>$ {e.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseInfo;
