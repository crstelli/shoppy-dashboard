import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

import { getOrders } from "../../services/apiOrders";
import { Order } from "./Order";

import { SquareArrowOutUpRight } from "lucide-react";

function LastOrders() {
  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const lastOrders = orders?.slice(0, 4);

  return (
    <div className="flex h-full flex-col rounded-md bg-gray-50 p-4 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Last orders</h3>
        <Link to="/orders">
          <SquareArrowOutUpRight />
        </Link>
      </div>
      <div className="mt-2 flex grow flex-col">
        <div className="grid grid-cols-[1fr_3fr_3fr_3fr] px-4 py-2 text-center font-bold">
          <span className="text-left">ID</span>
          <span>Revenue</span>
          <span>Status</span>
          <span>Created</span>
        </div>
        <div className="flex grow flex-col gap-2">
          {lastOrders?.map((ord) => (
            <Order order={ord} key={ord.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { LastOrders };
