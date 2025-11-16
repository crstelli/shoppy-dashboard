import { supabase } from "../supabase";
import { DEV_MODE, DEV_MODE_MESSAGE } from "../shared/constansts";

export async function getOrders() {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return orders;
}

export async function deleteOrder(id) {
  if (!DEV_MODE) {
    const { error } = await supabase.from("orders").delete().eq("id", id);

    if (error) throw error;
  } else throw new Error(DEV_MODE_MESSAGE);
}

export async function editOrderStatus(status, id) {
  const { error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", id);

  if (error) throw error;
}
