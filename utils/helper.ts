import { supabase } from "../supabase/supabase";

async function addCoinsToUserProfile(userId:string, amount:number) {
    try {
      // Fetch the current coin value
      const { data, error } = await supabase
        .from('UserProfile')
        .select('*')
        .eq('user_id', userId)
        .single();

     console.log("data ;>> ", data)
  
      if (error) throw error;
  
      // Calculate the new coin value
      const newCoinValue = data.coins + amount;
  
      // Update the userProfile with the new coin value
      const result = await supabase
        .from('UserProfile')
        .update({ coins: newCoinValue })
        .eq('user_id', userId);
  
      console.log(result)
  
      console.log(`Successfully added ${amount} coins to userProfile with userId ${userId}.`);
    } catch (e) {
      console.error('Error adding coins to userProfile:', e.message);
    }
  }
  

export {addCoinsToUserProfile}