import { createClient } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side Supabase client
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

// Types for our leads table
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
  source?: string;
  created_at: string;
}

export type LeadInsert = Omit<Lead, 'id' | 'created_at'>;

// Helper function to insert a new lead
export async function createLead(lead: LeadInsert) {
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select()
    .single();

  if (error) {
    console.error('Error creating lead:', error);
    throw error;
  }

  return data;
}

// Helper function to get all leads (admin use)
export async function getLeads() {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching leads:', error);
    throw error;
  }

  return data;
}


