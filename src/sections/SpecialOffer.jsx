import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <div className="justify-wrap max-container flex items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="Special Offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col ">
        <h2 className="capitalized font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span> Offer
        </h2>

        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalled value that sets us apart.
        </p>

        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button label="Show now" icon={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
