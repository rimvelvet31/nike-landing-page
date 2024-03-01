import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="jsutify-center flex flex-col items-center">
      <img
        src={imgURL}
        alt="Customer"
        width={120}
        className="rounded-full object-cover"
      />

      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>

      <div className="mt-3 flex items-center justify-center gap-2">
        <img
          src={star}
          alt="Rating"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>

      <h3 className="mt-1 text-center font-palanquin text-2xl font-bold">
        {customerName}
      </h3>
    </div>
  );
};
export default ReviewCard;
