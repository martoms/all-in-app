import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export function createDataSlice(sliceName: string, fetchAction: any) {

    const initialState = {
        loading: false,
        data: null,
        error: '',
    };

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
                    (state, action: PayloadAction<any>) => {
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
