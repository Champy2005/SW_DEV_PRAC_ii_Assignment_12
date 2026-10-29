"use client";

import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";

type DateReserveProps = {
  nameLastname: string;
  onNameChange: (value: string) => void;
  tel: string;
  onTelChange: (value: string) => void;
  venue: string;
  onVenueChange: (value: string) => void;
  date: Dayjs | null;
  onDateChange: (value: Dayjs | null) => void;
};

export default function DateReserve(props: DateReserveProps) {
  return (
    <>
      <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"
        required fullWidth value={props.nameLastname}
        onChange={event => props.onNameChange(event.target.value)} />
      <TextField variant="standard" name="Contact-Number" label="Contact-Number"
        type="tel" required fullWidth value={props.tel}
        onChange={event => props.onTelChange(event.target.value)} />
      <FormControl variant="standard" required fullWidth>
        <InputLabel id="venue-label">Venue</InputLabel>
        <Select id="venue" labelId="venue-label" value={props.venue}
          onChange={event => props.onVenueChange(event.target.value)}>
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Booking Date" value={props.date}
          onChange={props.onDateChange} format="YYYY/MM/DD"
          slotProps={{ textField: { variant: "standard", required: true, fullWidth: true } }} />
      </LocalizationProvider>
    </>
  );
}
