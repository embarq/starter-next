import { createClient } from '@/utils/supabase/server'
import { profilesTableName } from './db'

export interface UserProfile {
  id: number
  user_id: string
  name: string
  phone: string
  email: string
  metadata: string
}

export const getUserProfile = async (
  payload: Pick<UserProfile, 'user_id'>,
): Promise<{ data: null | UserProfile; error: null | Error }> => {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from(profilesTableName)
    .select('*')
    .eq('user_id', payload.user_id)
    .single()
  return { data, error }
}
