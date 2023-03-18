import React, { useEffect, useState } from "react";
import { StateContextCustom } from "../Context/StateContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const total = () =>card.reduce((pv,cv) =>pv+ cv.price,0);
  const {
    state: { card },
  } = StateContextCustom();
  const [mainTotal, setMainTotal] = useState(0);
  useEffect(() => {
    setMainTotal(total);
  },[]);

  const increaseTotal = (price) => {
    setMainTotal(mainTotal+price);
  };
  const decreaseTotal = (price) => {
    setMainTotal(mainTotal-price);
  };
  console.log(mainTotal);
  return (
    <>
      {card.length >= 1 ? (
        <div className="flex justify-center align-middle flex-col">
          {card.map((item) => {
            return (
              <Cart
                key={item.id}
                item={item}
                increaseTotal={increaseTotal}
                decreaseTotal={decreaseTotal}
              />
            );
          })}
          <hr className="w-60 mx-auto" />
          <div className="">
            <h2 className="">Total</h2>
            <h2 className="">{mainTotal.toFixed(2)}</h2>
          </div>
        </div>
      ) : (
        <div className=" min-h-screen pt-[200px] flex justify-center align-middle">
          <div className="">
            <h3 className="">Add to cart</h3>
          </div>
          <Link to="/">
            <button className=" px-3 bg-slate-600 text-white rounded">
              Go Shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default AddToCart;
