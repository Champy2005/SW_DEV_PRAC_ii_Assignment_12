import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[];
};

const initialState: BookState = {
    bookItems: [],
};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const index = state.bookItems.findIndex(
                item =>
                    item.venue === action.payload.venue &&
                    item.bookDate === action.payload.bookDate
            );

            if(index >= 0) {
                state.bookItems[index] = action.payload;
            } else {
                state.bookItems.push(action.payload);
            }
        },

        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            const remainingItems = state.bookItems.filter( obj => {
                return ((obj.nameLastname !== action.payload.nameLastname) 
                || (obj.tel !== action.payload.tel)
                || (obj.venue !== action.payload.venue))
                || (obj.bookDate !== action.payload.bookDate);
            });
            state.bookItems = remainingItems;
        }

    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;