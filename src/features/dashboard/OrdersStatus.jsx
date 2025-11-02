import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

function OrdersStatus() {
  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const completedOrders = orders?.filter(
    (ord) => ord.status === "completed",
  ).length;
  const deliveredOrders = orders?.filter(
    (ord) => ord.status === "delivery",
  ).length;
  const receivedOrders = orders?.filter(
    (ord) => ord.status === "received",
  ).length;
  const canceledOrders = orders?.filter(
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
    <div className="rounded-md bg-gray-50 p-4">
      <h3 className="text-xl font-semibold">Sold products summary</h3>
      <PieChart width={450} height={250}>
        <Pie
          data={data}
          dataKey={"value"}
          nameKey={"name"}
          paddingAngle={3}
          innerRadius={75}
          isAnimationActive={true}
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
