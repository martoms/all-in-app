import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchURL from '../../app/fetchURL';

interface HomeFeatures {
    _id: string;
    title: string;
    isFeatured: boolean;
    route: string
}

interface InitialState {
  loading: boolean;
  homeFeatures: HomeFeatures[];
  error: string; 
}

const initialState: InitialState = {
  loading: false,
  homeFeatures: [],
  error: "",
};

const fetchFeatures = fetchURL("home/fetchFeatures")

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