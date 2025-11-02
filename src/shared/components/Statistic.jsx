function Statistic({ children, value, color, icon }) {
  let bgColor;

  if (color === "purple") bgColor = "bg-purple-100";
  if (color === "orange") bgColor = "bg-orange-100";
  if (color === "sky") bgColor = "bg-sky-100";
  if (color === "emerald") bgColor = "bg-emerald-100";

  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-2 items-center justify-center gap-x-5 rounded-md bg-gray-50 p-4">
      <div className={`row-span-2 rounded-full p-3 ${bgColor}`}>{icon}</div>
      <span className="text-sm font-medium text-gray-600 uppercase">
        {children}
      </span>
      <h3 className="text-2xl font-semibold">{value}</h3>
    </div>
  );
}

export { Statistic };
