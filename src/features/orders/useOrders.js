import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

import toast from "react-hot-toast";

function useOrders() {
  const { error, data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
  if (error) toast.error(error.message);

  return { orders };
}

export { useOrders };
