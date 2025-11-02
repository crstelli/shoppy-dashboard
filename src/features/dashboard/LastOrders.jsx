import { Order } from "./Order";

function LastOrders() {
  return (
    <div className="flex h-full flex-col rounded-md bg-gray-50 p-4">
      <h3 className="text-xl font-semibold">Last orders</h3>
      <div className="mt-2 flex grow flex-col justify-between">
        <div className="grid grid-cols-[1fr_2fr_1fr_2fr] px-4 py-2 text-center font-bold">
          <span className="text-left">ID</span>
          <span>Revenue</span>
          <span>Status</span>
          <span>Delivery</span>
        </div>
        <Order order={{ status: "completed" }} />
        <Order order={{ status: "canceled" }} />
        <Order order={{ status: "delivery" }} />
        <Order order={{ status: "received" }} />
      </div>
    </div>
  );
}

export { LastOrders };
