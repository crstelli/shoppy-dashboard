import { DEV_MODE, DEV_MODE_MESSAGE } from "../shared/constansts";
import { supabase } from "../supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signup({ email, password }) {
  if (!DEV_MODE) {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;
    return data;
  } else {
    throw new Error(DEV_MODE_MESSAGE);
  }
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw error;
  return data.user;
}

export async function logout() {
  const { data, error } = await supabase.auth.signOut();

  if (error) throw error;
  return data;
}
