import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder, editOrderStatus } from "../../services/apiOrders";
import toast from "react-hot-toast";

function useOrder() {
  const queryClient = useQueryClient();
  const { mutate: handleDelete } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
      toast.success("Order eliminated successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: handleDelivery } = useMutation({
    mutationFn: (id) => editOrderStatus("delivery", id),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
      toast.success("Order eliminated successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: handleCompleted } = useMutation({
    mutationFn: (id) => editOrderStatus("completed", id),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
      toast.success("Order eliminated successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: handleCancel } = useMutation({
    mutationFn: (id) => editOrderStatus("canceled", id),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
      toast.success("Order eliminated successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { handleDelete, handleDelivery, handleCompleted, handleCancel };
}

export { useOrder };
