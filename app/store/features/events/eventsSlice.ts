import { IEvent } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventsState {
  events: IEvent[];
}

const initialState: EventsState = {
  events: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<IEvent>) {
      state.events.push(action.payload); // ✅ Now `state.events` is an array
    },
    updateEvent(state, action: PayloadAction<IEvent>) {
      const { id } = action.payload;
      const eventIndex = state.events.findIndex((event) => event.id === id);
      if (eventIndex !== -1) {
        state.events[eventIndex] = action.payload;
      }
    },
    removeEvent(state, action: PayloadAction<string>) {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const { addEvent, removeEvent, updateEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
