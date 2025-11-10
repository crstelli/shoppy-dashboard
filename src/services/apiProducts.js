import { supabase } from "../supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) throw error;
  return products;
}

export async function addProduct({ item, image: { image_file, image_name } }) {
  const { error } = await supabase.from("products").insert([item]);

  if (error) throw error;

  const { error: storageError } = await supabase.storage
    .from("images")
    .upload(image_name, image_file);

  if (storageError) throw error;
}

export async function deleteProduct(item) {
  const { error } = await supabase.from("products").delete().eq("id", item);

  if (error) throw error;
}

export async function editProduct(item) {
  const { error } = await supabase
    .from("products")
    .update(item)
    .eq("id", item.id);

  if (error) throw error;
}
