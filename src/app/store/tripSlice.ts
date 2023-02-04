import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { DataTrip } from "../models/Trip";

interface TripState {
  trip: DataTrip[] | null;
  tripsLoaded : boolean
}

const initialState : TripState = {
    trip: null,
    tripsLoaded: false
};

export const fetchTrip = createAsyncThunk<DataTrip[]>(
    "trip/fetchTrip",
    async (_, thunkAPI) => {
      try {
        return await agent.Trip.gettrip();
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );
  export const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchTrip.fulfilled, (state, action) => {
        state.trip = action.payload;
        state.tripsLoaded = true
      });
    },
  });

export const {} = tripSlice.actions