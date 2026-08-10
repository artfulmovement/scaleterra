import { createClient } from "@supabase/supabase-js";

// Publishable key — public by design, ships in the client bundle.
export const SUPABASE_URL = "https://dgpyiqibevyzhgvmylro.supabase.co";
const PUBLISHABLE_KEY = "sb_publishable_jaCIqNR6VmnIcw9wI381pw_9XuaOD3V";

export const supabase = createClient(SUPABASE_URL, PUBLISHABLE_KEY);

export const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;
