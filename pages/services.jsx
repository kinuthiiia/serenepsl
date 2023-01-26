import { Footer, Header } from "../components";

export default function Services() {
  return (
    <div>
      <Header />

      {/* Content */}
      <div>
        <p>our services</p>
        <h1>Here’s what we do in detail</h1>

        <div>
          {/* Product list */}
          {[1, 2, 3, 4, 5].map((el) => (
            <Service />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const Service = () => {
  return (
    <div>
      <img src="/favicon.ico" alt="service" />
      <div>
        <h1>Expert fire inspection services</h1>
        <p>
          Fire protection system inspections and fire sprinkler inspections can
          result in expenses and lost revenue due to code violations, regulatory
          errors, or conflicts with authorities. Our expert inspectors
          understand multiple systems, local regulations, and code
          requirements.Our licensed team performs all fire protection
          inspections, from quarterly to fifty-year, and provides electronic
          documentation of results.
        </p>
      </div>
    </div>
  );
};
