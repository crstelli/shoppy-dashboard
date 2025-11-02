import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useFilter } from "../../shared/components/filter/useFilter";
import { differenceInDays } from "date-fns";

function OrdersStatus() {
  const { getFilter } = useFilter("last", "7days");
  const daysFilter = Number(getFilter()?.replace("days", ""));

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const filteredOrders = orders?.filter(
    (ord) =>
      Math.abs(differenceInDays(new Date(ord.created_at), Date.now())) <
      daysFilter,
  );

  const completedOrders = filteredOrders?.filter(
    (ord) => ord.status === "completed",
  ).length;
  const deliveredOrders = filteredOrders?.filter(
    (ord) => ord.status === "delivery",
  ).length;
  const receivedOrders = filteredOrders?.filter(
    (ord) => ord.status === "received",
  ).length;
  const canceledOrders = filteredOrders?.filter(
    (ord) => ord.status === "canceled",
  ).length;

  const data = [
    {
      name: "Completed",
      value: completedOrders,
      color: "oklch(79.2% 0.209 151.711)",
    },
    {
      name: "Delivery",
      value: deliveredOrders,
      color: "oklch(82.8% 0.189 84.429)",
    },
    {
      name: "Received",
      value: receivedOrders,
      color: "oklch(70.7% 0.022 261.325)",
    },
    {
      name: "Canceled",
      value: canceledOrders,
      color: "oklch(70.4% 0.191 22.216)",
    },
  ];

  return (
    <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-800">
      <h3 className="text-xl font-semibold">Orders status summary</h3>
      <PieChart width={450} height={250}>
        <Pie
          data={data}
          dataKey={"value"}
          nameKey={"name"}
          paddingAngle={3}
          innerRadius={75}
          isAnimationActive={true}
          className="dark:stroke-0"
        >
          {data.map((el) => (
            <Cell fill={el.color} key={el.name} />
          ))}
          <Tooltip />
        </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          layout="vertical"
          iconSize={10}
          iconType="circle"
        />
      </PieChart>
    </div>
  );
}

export { OrdersStatus };
