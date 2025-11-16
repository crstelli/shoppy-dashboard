import { DEV_MODE, DEV_MODE_MESSAGE } from "../shared/constansts";
import { supabase } from "../supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) throw error;
  return products;
}

export async function addProduct({ item, image: { image_file, image_name } }) {
  if (!DEV_MODE) {
    const { error } = await supabase.from("products").insert([item]);

    if (error) throw error;

    const { error: storageError } = await supabase.storage
      .from("images")
      .upload(image_name, image_file);

    if (storageError) throw error;
  } else throw new Error(DEV_MODE_MESSAGE);
}

export async function deleteProduct(item) {
  if (!DEV_MODE) {
    const { error } = await supabase.from("products").delete().eq("id", item);

    if (error) throw error;
  } else throw new Error(DEV_MODE_MESSAGE);
}

export async function editProduct(item) {
  if (!DEV_MODE) {
    const { error } = await supabase
      .from("products")
      .update(item)
      .eq("id", item.id);

    if (error) throw error;
  } else throw new Error(DEV_MODE_MESSAGE);
}
