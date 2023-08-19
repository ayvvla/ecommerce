"use client";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Store } from "@/utils/Store";
import { useContext } from "react";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import Image from "next/image";

export default function Cart() {
  const {
    state: { cart },
  } = useContext(Store);

  const [subTotal, setSubTotal] = useState(1)

  useEffect(()=> {
    setSubTotal(cart.reduce((acc,curr) => acc + (curr.price * curr.qty), 0))
  },[cart])

  return (
    <section className="p-4">
      <div className="mb-3">
        <Link href="/shop">
          <HiArrowNarrowLeft className="inline" />
          <small>Back to Shopping</small>
        </Link>
      </div>
      {cart.length > 0 ? (
        <section className="mt-7 px-10">
          <h1 className="text-2xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3">
            <aside className="col-span-2">
              <div className="flex mb-3">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              <div className="h-3/5 overflow-y-scroll overflow-x-hidden">
                {cart.map((c) => (
                  <CartItem cart={c} key={c.id} subTotal={subTotal}/>
                ))}
              </div>
            </aside>

            <aside className="card bg-slate-200 h-3/5 p-6 text-lg">
              <h1 className="text-xl font-semibold mb-10">Order Summary</h1>

              <div className="mb-5 flex justify-between">
                <p className="flex-1 text-slate-800">Subtotal</p>{" "}
                <span>{subTotal}</span>
              </div>

              <div className="underline"></div>

              <div className="mb-5 flex justify-between">
                <p className="flex-1 text-slate-800">Shipping</p>{" "}
                <span>N1000</span>
              </div>

              <div className="underline"></div>

              <div className="mb-16 flex justify-between">
                <p className="flex-1 text-slate-800 font-semibold">
                  Order Total
                </p>{" "}
                <span>N10000</span>
              </div>

              <button className="p-3 bg-blue-700 hover:bg-blue-900 w-full rounded-lg text-white mb-8">
                {" "}
                Checkout
              </button>
            </aside>
          </div>
        </section>
      ) : (
        <div className="empty--cart">
          <Image
            src={"/images/cart.png"}
            width={300}
            height={300}
            alt="Empty Cart Picture"
          />
          <div className="text-center">
            <h1 className="text-2xl font-light">Your cart is empty</h1>
            <p>Please add a few items</p>
          </div>
          <Link href="/shop">
          <button className="button bg-blue-700 text-white border-transparent hover:bg-blue-600 py-3 px-6 rounded">
          Return to Shopping 
          </button>
          </Link>
        </div>
      )}
    </section>
  );
}
