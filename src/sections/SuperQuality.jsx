import Button from "../components/Button";

import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="capitalized font-palanquin text-4xl font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>

        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premiums comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-10">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img
          src={shoe8}
          alt="Super quality Nike shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
