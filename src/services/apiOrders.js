import { supabase } from "../supabase";

export async function getOrders() {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return orders;
}

export async function addOrder(data) {
  const { error } = await supabase.from("orders").insert(data);

  if (error) throw error;
}

export async function deleteOrder(id) {
  const { error } = await supabase.from("orders").delete().eq("id", id);

  if (error) throw error;
}
