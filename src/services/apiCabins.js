import supabase from "./supabase";

export const getCabins=async()=>{
    const {data , error}=await supabase.from("cabins").select("*");

    if(error){
        throw new Error("cant get cabins")
    }

    return data;
}