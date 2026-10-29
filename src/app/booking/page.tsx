"use client";

import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Alert, Box, Button } from "@mui/material";
import type { Dayjs } from "dayjs";
import Link from "next/link";
import DateReserve from "@/components/DateReserve";
import { addBooking } from "@/redux/features/bookSlice";
import type { AppDispatch } from "@/redux/store";

export default function VenueBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    if (!nameLastname.trim() || !tel.trim() || !venue || !date?.isValid()) {
      setError("Please complete all fields and choose a valid booking date.");
      return;
    }
    dispatch(addBooking({ nameLastname: nameLastname.trim(), tel: tel.trim(), venue, bookDate: date.format("YYYY/MM/DD") }));
    setError("");
    setMessage("Booking saved. You can view or cancel it in My Booking.");
  }

  return (
    <main className="min-h-[calc(100vh-5rem)] px-4 py-10 text-stone-900 sm:px-8">
      <section className="mx-auto max-w-xl rounded-2xl border border-amber-900/15 bg-[#fffdf8] p-6 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold text-amber-950">Venue Booking</h1>
        <p className="mt-3 mb-8 text-stone-600">Choose a venue and date for your event.</p>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <DateReserve nameLastname={nameLastname} onNameChange={setNameLastname}
            tel={tel} onTelChange={setTel} venue={venue} onVenueChange={setVenue}
            date={date} onDateChange={setDate} />
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
          <Button type="submit" name="Book Venue" variant="contained"
            sx={{ bgcolor: "#78350f", py: 1.5, "&:hover": { bgcolor: "#451a03" } }}>Book Venue</Button>
          <Link href="/mybooking" className="text-center font-semibold text-amber-900 underline">View My Booking</Link>
        </Box>
      </section>
    </main>
  );
}
