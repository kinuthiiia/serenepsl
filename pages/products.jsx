import { Footer, Header } from "../components";

export default function Products() {
  return (
    <div>
      <Header />

      {/* Content */}
      <div>
        <p>products</p>
        <h1>And here is what we sell</h1>

        <div>
          {/* Product list */}
          {[1, 2, 3, 4, 5].map((el) => (
            <Product />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const Product = () => {
  return (
    <div>
      <img src="/favicon.ico" alt="product" />
      <div>
        <h1>Emergency Exit Lighting</h1>
        <p>
          Fire exit signs are part of an emergency evacuation system that guides
          people in public buildings or buildings (either residential or
          commercial,) where there are many people, to the closest exit so they
          can leave the building safely.
        </p>
        <h1>Ksh. 500</h1>
      </div>
    </div>
  );
};
