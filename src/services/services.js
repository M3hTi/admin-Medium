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

export async function logouut() {
  try {
    let { error } = await supabase.auth.signOut();
    if (error)
      throw new Error(`You can't logged out at this moment, Try again later!`);
  } catch (error) {
    console.log("❌ ERROR: my error is:", error.message);
  }
}

export async function getCurrentUser() {
  try {
    const { data: session, error: errorSession } =
      await supabase.auth.getSession();

    if (errorSession) throw new Error(`We can't get current session!`);

    if (!session.session) return null;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("🔍 DEBUG: user info is:", user);
    return user;
  } catch (error) {
    console.log("❌ ERROR: My Error is:", error.message);
    throw error;
  }
}
