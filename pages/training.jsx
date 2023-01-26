import { IconArrowRight } from "@tabler/icons";
import { Footer, Header } from "../components";

export default function Services() {
  return (
    <div>
      <Header />

      {/* Content */}
      <div>
        <p>training</p>
        <h1>We train on fire safety and inspection</h1>

        <p>
          We've taken the knowledge we have gained from countless inspections
          and years in the field and created a real-world curriculum to help you
          maintain safety compliance. Our curriculum is rooted with tips and
          guidance on how to complete the inspections as efficiently and
          effectively as possible.
        </p>

        <p>
          Through our years of experience helping healthcare facilities, nursing
          homes, commercial facilities and manufacturing plants stay up to date
          and on par with current codes and standards, we know what it takes to
          ensure staff has the knowledge they need in the field to make wise
          decisions during inspections.
        </p>

        <p>Our online learning curriculum includes :</p>

        <div>
          <span>&bull; Fire Door Inspection Training</span>
          <span>&bull; Combustible Dust Health and Safety</span>
          <span>&bull; Fire & Smoke Damper Inspection</span>
          <span>&bull; Introduction to Smoke Control</span>
          <span>&bull; Emergency Exit Light Inspection</span>
          <span>&bull; Rolling Steel Fire Door Inspection and Drop Test</span>
        </div>

        {/* Benefits of training */}
        <div>
          <h1>The Benefits of training ?</h1>
          {[1, 2, 3, 4].map((el) => (
            <Benefit />
          ))}
        </div>
      </div>

      {/* Enroll */}
      <div>
        {/* Onsite */}
        <button className="flex">
          <div>
            <h1>register for onsite course</h1>
            <p>
              Partake in our 1-2 day onsite course and earn a fire safety novice
              certificate.
            </p>
          </div>
          <IconArrowRight />
        </button>

        {/* Online */}
        <button className="flex">
          <div>
            <h1>register for online course</h1>
            <p>
              Partake in our 8 hr course and earn a fire safety novice
              certificate. Learn at your own pace
            </p>
          </div>
          <IconArrowRight />
        </button>
      </div>

      <Footer />
    </div>
  );
}

const Benefit = () => {
  return (
    <div>
      <p>&bull; protect lives</p>
      <p>
        By training your employees, you’ll have a team of people who know
        exactly what to do in the event of a fire. Not only will they be able to
        escape the building themselves, they’ll also be able to guide customers
        to safety.
      </p>
    </div>
  );
};
