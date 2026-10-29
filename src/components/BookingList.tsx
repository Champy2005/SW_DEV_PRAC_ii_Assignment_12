"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { removeBooking } from "@/redux/features/bookSlice";
import type { AppDispatch, RootState } from "@/redux/store";

export default function BookingList() {
  const bookings = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();
  if (!bookings.length) return <p className="mt-6 text-stone-600">No Venue Booking</p>;
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      {bookings.map(booking => (
        <article key={`${booking.venue}-${booking.bookDate}`} className="rounded-2xl border border-amber-900/15 bg-[#fffdf8] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-amber-950">{booking.venue}</h2>
          <dl className="my-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 break-words">
            <dt className="font-semibold">Name</dt><dd>{booking.nameLastname}</dd>
            <dt className="font-semibold">Contact</dt><dd>{booking.tel}</dd>
            <dt className="font-semibold">Date</dt><dd>{booking.bookDate}</dd>
          </dl>
          <Button variant="outlined" color="error" onClick={() => dispatch(removeBooking(booking))}>Cancel Booking</Button>
        </article>
      ))}
    </div>
  );
}
