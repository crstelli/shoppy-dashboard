import { supabase } from "../supabase";

import { DEV_MODE, DEV_MODE_MESSAGE } from "../shared/constansts";

export async function getCategories() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) throw error;
  return categories;
}

export async function addCategory(data) {
  if (!DEV_MODE) {
    const { error } = await supabase.from("categories").insert(data);

    if (error) throw error;
  } else throw new Error(DEV_MODE_MESSAGE);
}

export async function deleteCategory(id) {
  if (!DEV_MODE) {
    const { error } = await supabase.from("categories").delete().eq("id", id);

    if (error) throw error;
  } else throw new Error(DEV_MODE_MESSAGE);
}
