const Button = ({
  label,
  icon,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none 
        ${
          backgroundColor
            ? `${borderColor} ${backgroundColor} ${textColor}`
            : "border-coral-red bg-coral-red text-white"
        }
        ${fullWidth && "w-full"}
      `}
    >
      {label}

      {icon && (
        <img
          src={icon}
          alt="button icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};
export default Button;
