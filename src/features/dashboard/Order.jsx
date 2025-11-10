import { Tag } from "../../shared/components/Tag";
import { formatDistanceToNow } from "date-fns";

function Order({ order }) {
  let bgColor, tagColor;

  if (order.status === "completed") {
    bgColor = "bg-green-100/75 dark:bg-green-500/35";
    tagColor = "green";
  }
  if (order.status === "delivery") {
    bgColor = "bg-orange-100/75 dark:bg-orange-500/35";
    tagColor = "orange";
  }
  if (order.status === "canceled") {
    bgColor = "bg-red-100/75 dark:bg-red-500/35";
    tagColor = "red";
  }
  if (order.status === "received") {
    bgColor = "bg-gray-100/75 dark:bg-gray-400/35";
    tagColor = "gray";
  }

  return (
    <div
      className={`grid grid-cols-[1fr_3fr_3fr_3fr] items-center justify-items-center rounded-md px-4 py-2 text-sm dark:text-gray-300 ${bgColor}`}
    >
      <span className="justify-self-start">{order.id}</span>
      <span className="text-md text-gray-60 font-bold">${order.total}</span>
      <Tag color={tagColor}>{order.status}</Tag>
      <span>{formatDistanceToNow(new Date(order.created_at))} ago</span>
    </div>
  );
}

export { Order };
