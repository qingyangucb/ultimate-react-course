import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ctvknufkjrdwjegwgocl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dmtudWZranJkd2plZ3dnb2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MTUxMjMsImV4cCI6MjAzOTQ5MTEyM30.hjNaerHsJCiExS_wBr7OdWx4bXeD0XLvtJu9k55IZcA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
