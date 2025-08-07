import supabase from "./supabase";

export const getCabins=async()=>{
    const {data , error}=await supabase.from("cabins").select("*");

    if(error){
        throw new Error("cant get cabins")
    }

    return data;
}

export const deleteCabin=async(id)=>{
    const {data , error}=await supabase.from("cabins").delete().eq("id",id);
    if(error){
        throw new Error("cant get cabins")
    }
    return data;
}

export const addCabin=async(newCabin)=>{
    const {data, error} =await supabase.from("cabins").insert([newCabin]);
    if(error){
        throw new Error("cant get cabins")
    }
    return data;
}