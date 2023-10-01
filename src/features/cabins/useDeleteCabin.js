import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin deleted succesfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(`${err}`),
  });

  return { deleteCabin, isDeleting };
}

export default useDeleteCabin;
