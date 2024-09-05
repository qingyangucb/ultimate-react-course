import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBookingHook, isLoading: isDeletingBooking } =
    useMutation({
      mutationFn: (bookingId) => deleteBooking(bookingId),

      onSuccess: () => {
        toast.success(`Booking successfully deleted`);
        queryClient.invalidateQueries({ queryKey: ["bookings"] });
      },

      onError: () => toast.error("There was an error while deleting"),
    });

  return { deleteBookingHook, isDeletingBooking };
}
