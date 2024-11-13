import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv";

dotenv.config();

export default createClient(process.env.API_URL as string, process.env.API_SECRET as string);