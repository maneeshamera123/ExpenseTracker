import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://grvwuagmqukjwauplnxs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdydnd1YWdtcXVrandhdXBsbnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwODA2MzEsImV4cCI6MjAyODY1NjYzMX0.KWAt6HzxmawN2b6YRF6s72yk7-m3TQfMqyWiXpikSgo';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;