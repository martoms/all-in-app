// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchURL from '../../app/fetchURL';
import { createDataSlice } from '../../app/createSliceModule';

const fetchDataSearch = fetchURL("dataSearch/fetchDataSearch")

const dataSearchSlice = createDataSlice('dataSearch', fetchDataSearch)

export { fetchDataSearch }
export default dataSearchSlice.reducer;
