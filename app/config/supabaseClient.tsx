import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ucjgvndhcpnpuadmrupg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjamd2bmRoY3BucHVhZG1ydXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2NjYwNzAsImV4cCI6MjAzOTI0MjA3MH0.D3U03MjS2shdZTxL0O3LXWKtLbVVTR4s3PwryaGc6BI";

let supabase: any | null = null;

if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
  } else {
    console.error("Supabase URL and Key must be provided.");
  }

export { supabase };

