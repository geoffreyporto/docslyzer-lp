import { createClient } from "@supabase/supabase-js";

// External Supabase project — anon key is a publishable key, safe in client code.
const SUPABASE_URL = "https://pydwkurpbrmyumnddmzh.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5ZHdrdXJwYnJteXVtbmRkbXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MTM1MDIsImV4cCI6MjA4NzA4OTUwMn0.Tot_fIea1OdjPef4FVwGyCBqkClzqRFfKba2ueakszk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: localStorage,
  },
});
