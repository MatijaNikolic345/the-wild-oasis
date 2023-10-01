import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCabin as editCabinApi } from "../../services/apiCabins";
function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabin, id }) => editCabinApi(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin edit succesfull");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(`${err}`),
  });

  return { editCabin, isEditing };
}

export default useEditCabin;
