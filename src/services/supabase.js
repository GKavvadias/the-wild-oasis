import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rdanxprqdnqioonipnuf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkYW54cHJxZG5xaW9vbmlwbnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDc3NjYsImV4cCI6MjAzNjYyMzc2Nn0.cRj0N1nG39cJsh7So0YNMF5bsLh-sdQdruXNxUn7Fm0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
