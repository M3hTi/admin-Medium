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

export async function getAdmin(userId) {
  try {
    let { data: admin, error } = await supabase
      .from("admins")
      .select("*")
      .eq("id", userId)
      .select()
      .single();

    if (error) throw new Error(`We can't fetch your infoormation`);

    return admin;
  } catch (error) {
    console.log(
      "%c❌ ERROR: my error is",
      "color: #EF4444; font-weight: bold",
      error.message
    );
    throw error;
  }
}

export async function updateAdmin(admin) {
  try {
    // info avatar url => https://uxnfqdljsuukxndxfqcy.supabase.co/storage/v1/object/public/avatar/Me_.jpg

    const { fullName, email, avatar } = admin;

    // info 1) upload avatar
    const avatarFile = avatar[0];

    console.log(
      "%cℹ️ INFO: my avatar is:",
      "color: #3B82F6; font-weight: bold",
      avatarFile
    );

    if (!avatarFile) {
      throw new Error("Please select an avatar");
    }

    const avatarName = `${Math.random()}-${avatarFile?.name}`.replaceAll(
      "/",
      ""
    );

    console.log(
      "%cℹ️ INFO: name of avatar is:",
      "color: #3B82F6; font-weight: bold",
      avatarName
    );

    const avatarPath = `https://uxnfqdljsuukxndxfqcy.supabase.co/storage/v1/object/public/avatar/${avatarName}`;

    console.log(
      "%cℹ️ INFO: avatar path is",
      "color: #3B82F6; font-weight: bold",
      avatarPath
    );

    const { error: uploadingErr } = await supabase.storage
      .from("avatars")
      .upload(avatarName, avatarFile);

    if (uploadingErr)
      throw new Error(`we can't upload your image, Try again later!`);

    // info 2) updating user
    const { data, error } = await supabase.auth.updateUser({
      email,
      // password: "new-password",
      data: { full_name: fullName, avatar_url: avatarPath },
    });

    if (error)
      throw new Error(`We can't update your information, Try again later!`);

    return data;
  } catch (error) {
    console.log(
      "%c❌ ERROR: my error is:",
      "color: #EF4444; font-weight: bold",
      error.message
    );
    throw error;
  }
}

// info articles
export async function getArticles(articleId) {
  try {
    let query = supabase
      .from("articles")
      .select("*")
      .eq("status", "unconfirmed");

    if (articleId) {
      query.eq("id", articleId).select().single();
    }

    let { data: articles, error } = await query;

    if (error) throw new Error("We can't get articles at this moment");

    return articles;
  } catch (error) {
    console.log("❌ ERROR: my error is:", error.message);
  }
}

export async function resetArticleStatus(article) {
  try {
    const { id, status } = article;
    const { data, error } = await supabase
      .from("articles")
      .update({ status: status })
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(`We can't change status of ${data.title}`);

    return data;
  } catch (error) {
    console.log("❌ ERROR: my error is:", error.message);
    throw error;
  }
}
