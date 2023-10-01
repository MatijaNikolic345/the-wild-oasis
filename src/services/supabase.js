import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://efjnqqfxauovbrmyocrm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmam5xcWZ4YXVvdmJybXlvY3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0MzAzMjcsImV4cCI6MjAxMDAwNjMyN30.EDXYd0htsTz7rJX1bQplK_55SFR-tDnuEaycX1zubns";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
