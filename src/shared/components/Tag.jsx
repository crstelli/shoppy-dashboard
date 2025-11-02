function Tag({ children, color }) {
  let bgColor;

  if (color === "green") bgColor = "bg-green-300 dark:bg-green-400";
  if (color === "orange") bgColor = "bg-orange-300 dark:bg-orange-400";
  if (color === "red") bgColor = "bg-red-300 dark:bg-red-400";
  if (color === "gray") bgColor = "bg-gray-300 dark:bg-gray-400";

  return (
    <span
      className={`rounded-full px-3 py-1 text-center uppercase dark:text-gray-800 ${bgColor}`}
    >
      {children}
    </span>
  );
}

export { Tag };
