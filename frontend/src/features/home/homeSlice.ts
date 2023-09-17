import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type HomeFeatures = {
    _id: string;
    title: string;
    isFeatured: boolean;
};

type InitialState = {
  loading: boolean;
  homeFeatures: HomeFeatures[];
  error: string; 
};

const initialState: InitialState = {
  loading: false,
  homeFeatures: [],
  error: "",
};

const fetchFeatures = createAsyncThunk("home/fetchFeatures", async () => {
  const response = await fetch(import.meta.env.VITE_REACT_API_URL);
  const data = await response.json();
  return data;
});

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchFeatures.pending, state => {
        state.loading = true
      })
      builder.addCase(
        fetchFeatures.fulfilled,
        (state, action: PayloadAction<HomeFeatures[]>) => {
          state.loading = false
          state.homeFeatures = action.payload
          state.error = ''
        }
      )
      builder.addCase(fetchFeatures.rejected, (state, action) => {
        state.loading = false
        state.homeFeatures = []
        state.error = action.error.message || 'Something went wrong'
      })
    }
  })
  
  export { fetchFeatures }

  export default homeSlice.reducer
