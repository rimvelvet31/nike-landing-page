const ShoeCard = ({ imgURL, changeShoeImg, shoeImg }) => {
  const handleClick = () => {
    if (shoeImg !== imgURL.bigShoe) {
      changeShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${shoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="mx-sm:p-4 flex items-center justify-center rounded-xl bg-card bg-cover bg-center sm:h-40 sm:w-40">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default ShoeCard;
