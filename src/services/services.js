import { supabase } from "./supabase";


export async function login({ email, password }) {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error)
      throw new Error(`You can't login to your account, Try again Later`);

    return data;
  } catch (error) {
    console.log("❌ ERROR: error is", error.message);
    throw error;
  }
}
