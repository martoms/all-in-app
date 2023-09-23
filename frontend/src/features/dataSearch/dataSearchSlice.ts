import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchURL from '../../app/fetchURL';

interface DataSearch {
    title: string;
    description: string;
}

interface InitialState {
    loading: boolean;
    dataSearch: DataSearch | null;
    error: string;
}

const initialState: InitialState = {
    loading: false,
    dataSearch: null,
    error: "",
};

const fetchDataSearch = fetchURL("dataSearch/fetchDataSearch")

const dataSearchSlice = createSlice({
    name: 'dataSearch',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchDataSearch.pending, state => {
            state.loading = true;
        })
        builder.addCase(
            fetchDataSearch.fulfilled,
            (state, action: PayloadAction<DataSearch>) => {
                state.loading = false;
                state.dataSearch = action.payload;
                state.error = '';
            }
        )
        builder.addCase(fetchDataSearch.rejected, (state, action) => {
            state.loading = false;
            state.dataSearch = null;
            state.error = action.error.message || 'Something went wrong';
        })
    }
})

export { fetchDataSearch }
export default dataSearchSlice.reducer;
