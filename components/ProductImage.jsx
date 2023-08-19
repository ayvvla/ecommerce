import Image from "next/image";
import React from "react";

export default function ProductImage({ product,responsive }) {
  return (
    <div>
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={600}
        className="rounded shadow"
        style={{
          minWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
