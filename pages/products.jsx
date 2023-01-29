import { Footer, Header } from "../components";

export default function Products() {
  return (
    <div>
      <Header active="products" />

      {/* Content */}
      <div className="bg-[#f1f1f1]">
        <p className="uppercase tracking-wide text-[0.7rem] text-[#d32131] w-full text-center pt-8 m-0">
          products
        </p>
        <h1 className="w-full font-[Oswald] text-center mt-2">
          And here is what we sell
        </h1>

        <div className=" p-6 md:p-12 space-y-6">
          {/* Product list */}
          {[1, 2, 3, 4, 5].map((el) => (
            <Product key={el} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const Product = () => {
  return (
    <div className="p-4 bg-white md:flex md:justify-between">
      <img
        src="/favicon.ico"
        alt="product"
        className="w-full md:w-[200px] md:h-[200px]"
      />
      <div className=" w-full pt-6 md:w-[calc(100%-250px)] space-y-6 my-auto">
        <h1 className="w-full text-[1.3rem] font-[Oswald]">
          Emergency Exit Lighting
        </h1>
        <p className="text-[0.8rem] text-gray-600 font-[300]">
          Fire exit signs are part of an emergency evacuation system that guides
          people in public buildings or buildings (either residential or
          commercial,) where there are many people, to the closest exit so they
          can leave the building safely.
        </p>
        <h1 className="w-full text-[1.3rem] font-[Oswald] text-red-700">
          Ksh. 500
        </h1>
      </div>
    </div>
  );
};
