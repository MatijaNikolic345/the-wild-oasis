import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_COUNT } from "../../utils/constants";

function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const status = searchParams.get("status");
  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", page, status],
    queryFn: () => getBookings({ page, status }),
  });
  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_COUNT);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", page + 1, status],
      queryFn: () => getBookings({ page: page + 1, status }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", page - 1, status],
      queryFn: () => getBookings({ page: page - 1, status }),
    });

  return { bookings, isLoading, page, count, pageCount };
}

export default useBookings;
