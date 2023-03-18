import React, { useState } from 'react'
import { HiOutlinePlus, HiMinus } from "react-icons/hi";
const Cart = ({item,increaseTotal,decreaseTotal}) => {
    const [count,setCount]=useState(1)
    const increaseitem=()=>{
        setCount(count+1);
        increaseTotal(item.price);
    }
    const decreaseitem=()=>{
      if(count>1){
  setCount(count - 1);
  decreaseTotal(item.price);
      }
    }
    const countprice=count*item.price;
  return (
        <div className="flex flex-col justify-around mb-5">
          <div className=" flex justify-around align-middle max-w-[700px]">
            <img
              src={item.image}
              alt=""
              className=" h-[150px] object-contain"
            />
            <div className=" flex item-center align-middle justify-center flex-col">
              <p onClick={increaseitem} className="cursor-pointer">
                <HiOutlinePlus className="text-2xl " />
              </p>
              <p className="text-2xl ml-1">{count}</p>

              <p onClick={decreaseitem} className="cursor-pointer">
                <HiMinus className="text-2xl" />
              </p>
            </div>
          </div>
          <div className="">
            <p className="">{item.title}</p>
            <p className="">${countprice.toFixed(2)}</p>
            <p className="">{item.description}</p>
          </div>
        </div>
  );
}

export default Cart
