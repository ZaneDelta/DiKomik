import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side / server-side (RSC) Supabase client.
// Untuk operasi yang butuh service role (mis. admin upload), buat client
// terpisah di route handler dengan SUPABASE_SERVICE_ROLE_KEY.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
