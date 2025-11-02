function Statistic({ children, value, color, icon }) {
  let bgColor;

  if (color === "purple") bgColor = "bg-purple-100 dark:bg-purple-500";
  if (color === "orange") bgColor = "bg-orange-100 dark:bg-orange-500";
  if (color === "sky") bgColor = "bg-sky-100 dark:bg-sky-500";
  if (color === "emerald") bgColor = "bg-emerald-100 dark:bg-emerald-500";

  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-2 items-center justify-center gap-x-5 rounded-md bg-gray-50 p-4 dark:bg-gray-800">
      <div className={`row-span-2 rounded-full p-3 ${bgColor}`}>{icon}</div>
      <span className="text-sm font-medium text-gray-600 uppercase dark:text-gray-400">
        {children}
      </span>
      <h3 className="text-2xl font-semibold">{value}</h3>
    </div>
  );
}

export { Statistic };
