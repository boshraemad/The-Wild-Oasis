import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://taxeqauarjkalskxvtag.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRheGVxYXVhcmprYWxza3h2dGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MjM3NzAsImV4cCI6MjA3MDA5OTc3MH0.z4UdQldq-9uGw0yRyAH0WA39GHn9ivyf8SPJoG0r3Cs"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;