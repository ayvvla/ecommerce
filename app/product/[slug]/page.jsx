"use client";
import data from "@/utils/data";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { useState, useContext } from "react";
import { Store } from "@/utils/Store";
import { FaCommentsDollar } from "react-icons/fa";

export function generateMetadata({ params }) {
  const product = data.products.find((x) => x.slug === params.slug);
  if (product)
    return {
      title: product.name,
      description: product.description,
    };
}

export function ProductPage({ params }) {
  const product = data.products.find((x) => x.slug === params.slug);
  if (!product) {
    return (
      <div className="grid place-items-center">
        Product Not Found.{" "}
        <span>
          Return <Link href="/">Home</Link>{" "}
        </span>
      </div>
    );
  }

  const {
    state: { cart },
    addToCart,
    changeCartQty,
  } = useContext(Store);
  console.log(product.qty);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="grid lg:grid-cols-4 md:gap-3 p-20">
      <div className="md:col-span-2">
        <ProductImage product={product} layout />
      </div>
      <div className="md:col-span-2 flex flex-col px-0 py-10 lg:px-10 lg:py-0">
        <p className="text-xl font-semibold">{product.category}</p>
        <div className="py-4">
          <h2 className="font-semibold text-4xl">{product.name}</h2>
          <p className="text-xs">{product.brand}</p>
        </div>
        <p className="py-4">₦{product.price}</p>
        <div className="py-8">
          <h1 className="font-semibold text-xl">Description:</h1>
          <p>{product.description}</p>
        </div>

        <p>
          <span className="font-semibold text-xl">Status:</span>{" "}
          {product.countInStock ? "In Stock" : "Unavailable"}
        </p>
        <div className="py-8">
          <h1 className="font-semibold text-xl">
            Washing and Care Instructions:
          </h1>
          <ul className=" list-inside list-disc ml-4">
            <li>Machine washable with cold water on delicate.</li>
            <li>Hang dry, do not tumble dry.</li>
          </ul>
        </div>

        <form className="py-8 flex gap-4" onSubmit={handleSubmit}>
          <button className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:text-white hover:bg-blue-700 hover:cursor-pointer">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductPage;
