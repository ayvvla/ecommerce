import React from "react";
import Image from "next/image";

const Action = () => {
  return (
    <section className="px-5 grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center action">
      <div className="">
        <div className="relative">
          <Image
            src={"/images/zah.jpg"}
            alt="classy boutique"
            width={400}
            height={400}
            style={{minWidth: '100%', height: 'auto'}}
            className="shadow rounded-t-md"
          />
          <div className="absolute rounded-r bottom-16 left-0 bg-blue-700 px-3 py-2 text-gray-100 hover:bg-blue-500">
            Shop Now
          </div>
        </div>
        <div className="bg-blue-700 px-5 pt-3 pb-9 text-gray-100 rounded-b-lg">
          <h1 className="text-xl font-semibold mb-2">
            Buy your goddamn Joggers
          </h1>
          <p>Classy Rich attractive Look</p>
        </div>
      </div>

      <div>
        <div className="relative">
          <Image
            src={"/images/zah.jpg"}
            alt="classy boutique"
            width={400}
            height={400}
            style={{ height: "auto" }}
            className="shadow rounded-t-md"
          />
          <div className="absolute rounded-r bottom-16 left-0 bg-blue-700 px-3 py-2 text-gray-100 hover:bg-blue-500">
            Shop Now
          </div>
        </div>
        <div className="bg-blue-700 px-5 pt-3 pb-9 text-gray-100 rounded-b-lg">
          <h1 className="text-xl font-semibold mb-2">
            Buy your goddamn Joggers
          </h1>
          <p>Classy Rich attractive Look</p>
        </div>
      </div>

      <div>
        <div className="relative">
          <Image
            src={"/images/zah.jpg"}
            alt="classy boutique"
            width={400}
            height={400}
            style={{ height: "auto" }}
            className="shadow rounded-t-md"
          />
          <div className="absolute rounded-r bottom-16 left-0 bg-blue-700 px-3 py-2 text-gray-100 hover:bg-blue-500">
            Shop Now
          </div>
        </div>
        <div className="bg-blue-700 px-5 pt-3 pb-9 text-gray-100 rounded-b-lg">
          <h1 className="text-xl font-semibold mb-2">
            Buy your goddamn Joggers
          </h1>
          <p>Classy Rich attractive Look</p>
        </div>
      </div>
    </section>
  );
};

export default Action;
