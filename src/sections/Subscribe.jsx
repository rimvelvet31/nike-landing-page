import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex items-center justify-between gap-10 max-lg:flex-col"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up To Our
        <span className="text-coral-red"> Newsletter</span>
      </h3>

      <div className="flex w-full items-center gap-5 rounded-full p-3 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
        <input type="text" placeholder="signup@nike.com" className="input" />

        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
