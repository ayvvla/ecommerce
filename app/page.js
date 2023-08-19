import Nav from "@/components/Header";
import Hero from "@/components/Hero";
import Action from "@/components/Action";
import data from "@/utils/data";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  return (
    <>
      <Hero />I think i drink too much
      <Action />
      <section className="mt-28 bg-white text-center py-16">
        <h1 className="font-semibold text-5xl">New Arrivals</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-10">
          {
            data.products.map((product) => {
              return (
                <ProductItem product={product} key={product.slug} />
              )
            })
          }
        </div>
        <h1 className="font-semibold text-5xl">Trending</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-10">
          {
            data.products.map((product) => {
              return (
                <ProductItem product={product} key={product.slug} />
              )
            })
          }
        </div>
        <h1 className="font-semibold text-5xl">Top Products</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-10">
          {
            data.products.map((product) => {
              return (
                <ProductItem product={product} key={product.slug} />
              )
            })
          }
        </div>
      </section>
    </>
  );
}
