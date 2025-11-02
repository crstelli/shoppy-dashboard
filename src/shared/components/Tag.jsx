function Tag({ children, color }) {
  let bgColor;

  if (color === "green") bgColor = "bg-green-300";
  if (color === "orange") bgColor = "bg-orange-300";
  if (color === "red") bgColor = "bg-red-300";
  if (color === "gray") bgColor = "bg-gray-300";

  return (
    <span className={`rounded-full px-3 py-1 text-center uppercase ${bgColor}`}>
      {children}
    </span>
  );
}

export { Tag };
