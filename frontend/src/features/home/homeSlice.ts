// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchURL from '../../app/fetchURL';
import { createDataSlice } from '../../app/createSliceModule';

const fetchFeatures = fetchURL("home/fetchFeatures")

const homeSlice = createDataSlice('home', fetchFeatures)
  
export { fetchFeatures }

export default homeSlice.reducer