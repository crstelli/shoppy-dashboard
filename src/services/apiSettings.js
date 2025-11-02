import { supabase } from "../supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select().single();

  if (error) throw error;
  return data;
}

export async function updateSettings(value) {
  const { data, error } = await supabase
    .from("settings")
    .update(value)
    .eq("id", 1);

  if (error) throw error;
  return data;
}
