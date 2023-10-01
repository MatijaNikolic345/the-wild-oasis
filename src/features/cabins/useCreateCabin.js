import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addCabin } from "../../services/apiCabins";
function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => addCabin(newCabin),
    onSuccess: () => {
      toast.success("Cabin added succesfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(`${err}`),
  });

  return { createCabin, isCreating };
}

export default useCreateCabin;
