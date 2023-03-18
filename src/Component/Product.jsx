import React from 'react';
import { StateContextCustom } from '../Context/StateContext';

const Product = (props) => {
    const { id, image, description, title, price, filterProduct} = props;
    const {dispatch}=StateContextCustom();
  return (
    <div>
      <div className="w-72 shadow rounded flex flex-col p-2">
        <img src={image} alt="" className=" max-w-[150px] h-[150px]" />
      </div>
      <h2 className="truncate text-gray-500 text-2xl font-semibold">
        {title?.substring(0, 20)}
      </h2>
      <p className="">${price}</p>
      <button
        onClick={() => dispatch({type: "ADD_TO_CART",payload:props})}
        className=" mr-2 px-6 py-2 bg-teal-500 rounded shadow text-white"
      >
        Add to cart
      </button>
      <button className=" mr-2 px-6 py-2 bg-teal-500 rounded shadow text-white">
        Detail
      </button>
    </div>
  );
}

export default Product
