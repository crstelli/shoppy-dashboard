import { createClient } from "@supabase/supabase-js";

const URL = "https://bmieklbextypaidmhqao.supabase.co";
const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtaWVrbGJleHR5cGFpZG1ocWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MTMzNjAsImV4cCI6MjA3NzI4OTM2MH0.4EuNnpIgbV79Lz4FwPXmDFz5Vj9DHhlBh1xIulesaVY";

export const supabase = createClient(URL, KEY);
