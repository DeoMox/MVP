import { createClient } from "@supabase/supabase-js"

// Check if Supabase environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create Supabase client only if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

// Database types
export interface WaitlistEntry {
  id?: string
  full_name: string
  phone: string
  email: string
  created_at?: string
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  message: string
  created_at?: string
}

export interface MotorcycleApplication {
  id?: string
  full_name: string
  phone: string
  email: string
  motorcycle_type: string
  monthly_income: number
  employment_status: string
  id_number: string
  address: string
  references: string
  created_at?: string
  status?: "pending" | "approved" | "rejected"
}

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey)
}
