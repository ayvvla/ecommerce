import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductItem({product}) {
  return (
    <div className='card'>
      <Link href={`/product/${product.slug}`}>
        <Image 
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded shadow"
          priority
        />
      </Link>
      <div className='flex flex-col justify-center items-start p-5'>
        <Link href={`/product/${product.slug}`}>
          <h2>{product.name}</h2>
        </Link>
        <p>{product.category}</p>
        <p>₦{product.price}</p>
      </div>
    </div>
  )
}
