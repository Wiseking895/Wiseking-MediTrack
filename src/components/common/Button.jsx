import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className,
  disabled = false,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
