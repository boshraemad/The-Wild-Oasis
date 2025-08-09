import { updateSetting as updateSettings } from "../../services/apiSettings";
import { useMutation , useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


export const useUpdateSetting=()=>{
    const queryClient=useQueryClient();
    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
      mutationFn: updateSettings,
      onSuccess: () => {
        toast.success("settings successfully updated");
        queryClient.invalidateQueries({ queryKey: ["settings"] });
      },
      onError: (err) => toast.error(err.message),
    });

    return {isUpdating , updateSetting}
}