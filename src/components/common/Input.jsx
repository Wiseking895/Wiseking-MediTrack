const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
