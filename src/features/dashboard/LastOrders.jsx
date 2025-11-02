import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { Order } from "./Order";

function LastOrders() {
  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const lastOrders = orders?.slice(0, 4);

  return (
    <div className="flex h-full flex-col rounded-md bg-gray-50 p-4">
      <h3 className="text-xl font-semibold">Last orders</h3>
      <div className="mt-2 flex grow flex-col justify-between">
        <div className="grid grid-cols-[1fr_3fr_3fr_3fr] px-4 py-2 text-center font-bold">
          <span className="text-left">ID</span>
          <span>Revenue</span>
          <span>Status</span>
          <span>Delivery</span>
        </div>
        {lastOrders?.map((ord) => (
          <Order order={ord} key={ord.id} />
        ))}
      </div>
    </div>
  );
}

export { LastOrders };
