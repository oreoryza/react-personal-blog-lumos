import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Async actions
export const fetchPosts = createAsyncThunk("blog/posts", async (page) => {
  const response = await axios.get(`${API_URL}/games/news?page=${page}`);
  return response.data;
});

export const fetchRecentPosts = createAsyncThunk("blog/recentPosts", async () => {
  const response = await axios.get(`${API_URL}/games`);
  return response.data;
});

export const detailPost = createAsyncThunk("blog/detailPost", async (key) => {
  const response = await axios.get(`${API_URL}/detail/${key}`);
  return response.data;
});

export const subscribe = createAsyncThunk("blog/subscribe", async (email) => {
  const response = await axios.post(`${API_URL}/subscribe`, { email });
  return response.data;
});

// Initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
  recentPosts: [],
  post: {},
};

// Slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      // Fetch Posts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Recent Posts
      .addCase(fetchRecentPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecentPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.recentPosts = action.payload;
      })
      .addCase(fetchRecentPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Detail Post
      .addCase(detailPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload.results;
      })
      .addCase(detailPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default postsSlice.reducer;