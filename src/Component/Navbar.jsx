import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { StateContextCustom } from "../Context/StateContext";
import { Link } from "react-router-dom";
import { SiPrestashop} from "react-icons/si";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { card },
  } = StateContextCustom();
  console.log(card);
  return (
    <div className="flex justify-around shadow rounded p-5 items-center">
      <Link to="/">
        <h2 className=" d-flex">
          <SiPrestashop className="text-2xl"/><span>Mini</span>
        </h2>
      </Link>
      <div className=" flex gap-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" outline-none border-b-2 border-b-grey-500 bg-transparent"
        />
        <Link to="/Addtocard">
          <div className="relative">
            <FiShoppingCart className="text-3xl" />
            <span className="absolute bottom-4 h-6 flex items-center w-6 left-4 text-2xl bg-teal-500 text-white p-1 rounded-[100%]">
              {card.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
