import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// import {EXPO_SUPABASE_ANON_KEY, EXPO_SUPABASE_API_URL} from "@env"

const supabaseUrl = process.env.EXPO_SUPABASE_API_URL
const supabaseAnonKey = process.env.EXPO_SUPABASE_ANON_KEY



export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})