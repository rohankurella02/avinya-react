import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { videosService } from "./videosService";

export const allVideos = createAsyncThunk(
  "videos/getVideos",
  async (tag, thunkAPI) => {
    try {
      return await videosService.getVideos(tag);
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

const initialState = {
  videos: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    resetVideosState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: {
    [allVideos.pending]: (state) => {
      state.isLoading = true;
    },
    [allVideos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.videos = action.payload.videos;
      state.message = action.payload.message;
    },
    [allVideos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload.message || action.message;
      state.videos = [];
    },
  },
});

export const { resetVideosState } = videosSlice.actions;

export default videosSlice.reducer;
