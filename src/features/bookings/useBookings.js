import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_COUNT } from "../../utils/constants";

function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", page],
    queryFn: () => getBookings({ page }),
  });
  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_COUNT);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", page + 1],
      queryFn: () => getBookings({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", page - 1],
      queryFn: () => getBookings({ page: page - 1 }),
    });

  return { bookings, isLoading, page, count, pageCount };
}

export default useBookings;
