import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchURL = (action: string) => {
    const fetchedData = createAsyncThunk(action, async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data
    });

    return fetchedData;
}

export default fetchURL;