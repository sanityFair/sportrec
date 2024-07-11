import { createClient } from "@supabase/supabase-js";

export const supaBaseClient = createClient(
  import.meta.env.VITE_API_BASE_URL,
  import.meta.env.VITE_API_KEY
);
