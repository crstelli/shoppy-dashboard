import { useQuery } from "@tanstack/react-query";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getOrders } from "../../services/apiOrders";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { useFilter } from "../../shared/components/filter/useFilter";

function Sales() {
  const { getFilter } = useFilter("last", "7days");
  const daysFilter = Number(getFilter()?.replace("days", ""));

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), daysFilter - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      orders: orders?.reduce(
        (acc, ord) =>
          isSameDay(new Date(date), new Date(ord.created_at)) ? acc + 1 : acc,
        0,
      ),
    };
  });

  return (
    <div className="col-span-2 rounded-md bg-gray-50 p-4 dark:bg-gray-800">
      <h3 className="text-xl font-semibold">Recent sales</h3>
      <AreaChart
        width={"100%"}
        height={400}
        className="mt-6 overflow-hidden"
        data={data}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="oklch(69.6% 0.17 162.48)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="oklch(69.6% 0.17 162.48)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="label" />
        <YAxis width="auto" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="orders"
          stroke="oklch(69.6% 0.17 162.48)"
          fillOpacity={1}
          fill="url(#colorUv)"
          isAnimationActive={true}
        />
      </AreaChart>
    </div>
  );
}

export { Sales };
