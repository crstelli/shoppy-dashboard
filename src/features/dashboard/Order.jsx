import { Tag } from "../../shared/components/Tag";

function Order({ order }) {
  let bgColor, tagColor;

  if (order.status === "completed") {
    bgColor = "bg-green-100/75";
    tagColor = "green";
  }
  if (order.status === "delivery") {
    bgColor = "bg-orange-100/75";
    tagColor = "orange";
  }
  if (order.status === "canceled") {
    bgColor = "bg-red-100/75";
    tagColor = "red";
  }
  if (order.status === "received") {
    bgColor = "bg-gray-100/75";
    tagColor = "gray";
  }

  return (
    <div
      className={`grid grid-cols-[1fr_2fr_1fr_2fr] rounded-md px-4 py-2 text-center text-sm ${bgColor}`}
    >
      <span className="text-left">2</span>
      <span className="text-md font-bold">$76</span>
      <Tag color={tagColor}>Delivery</Tag>
      <span>in 2 days</span>
    </div>
  );
}

export { Order };
