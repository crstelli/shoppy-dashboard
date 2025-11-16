import { DEV_MODE, DEV_MODE_MESSAGE } from "../shared/constansts";
import { supabase } from "../supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select().single();

  if (error) throw error;
  return data;
}

export async function updateSettings(value) {
  if (!DEV_MODE) {
    const { data, error } = await supabase
      .from("settings")
      .update(value)
      .eq("id", 1);

    if (error) throw error;
    return data;
  } else throw new Error(DEV_MODE_MESSAGE);
}
