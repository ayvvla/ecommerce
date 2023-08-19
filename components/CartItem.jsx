"use client";
import React,{useContext, useEffect, useState} from "react";
import { Store } from "@/utils/Store";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

function CartItem({ cart }) {
  console.log(cart);
  const {product, removeFromCart, changeCartQty} = useContext(Store)
  const [cartQty, setCartQty] = useState(cart.qty)
  const [total, setTotal] = useState(1)
  useEffect(() => {
    setTotal(
      cart.price * cartQty
    )
  },[cart, cartQty])

  return (
    <>
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <button onClick={()=> removeFromCart(cart)} className="flex justify-center items-center w-1/5 hover:text-red-400">
            <AiOutlineCloseCircle size={20} />
          </button>
          <div className="w-20">
            <Image
              height={200}
              width={200}
              src={cart.image}
              alt="Product Image"
            />
          </div>
          <div className="flex flex-col ml-4 flex-grow">
            <span className="font-bold text-sm mb-3">{cart.name}</span>
            <span className="text-blue-600 text-xs">{cart.brand}</span>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
        <select onChange={(e) => setCartQty(e.target.value)} value={cartQty} className="focus:outline-none">
              {[...Array(cart.countInStock).keys()].map((x) => (
                <option key={x + 1}>{x + 1}</option>
              ))}
            </select>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">
          ₦{cart.price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">{total}</span>
      </div>
    </>
  );
}

export default CartItem;
