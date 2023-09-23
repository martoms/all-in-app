import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for the initial state
interface InitialState {
    loading: boolean;
    data: any | null;
    error: string;
}

const initialState: InitialState = {
    loading: false,
    data: null,
    error: ''
}

type PayloadType<T> = {
    [key: string]: T;
};


export function createDataSlice<T>(
    sliceName: string,
    fetchAction: any 
    ) {

    return createSlice({
        name: sliceName,
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchAction.pending, (state) => {
                    state.loading = true;
                })
                .addCase(
                    fetchAction.fulfilled,
                    (state, action: PayloadAction<PayloadType<T>>) => {
                        state.loading = false;
                        state.data = action.payload;
                        state.error = '';
                    }
                )
                .addCase(fetchAction.rejected, (state, action) => {
                    state.loading = false;
                    state.data = null;
                    state.error = action.error.message || 'Something went wrong';
                });
        },
    });
}
