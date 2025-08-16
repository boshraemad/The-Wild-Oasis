import supabase from "./supabase";

export const login = async(data)=>{
    const { data:res, error } = await supabase.auth.signInWithPassword(data)

     if(error) throw new Error(error.message);
        console.log(res);
     return res;
}