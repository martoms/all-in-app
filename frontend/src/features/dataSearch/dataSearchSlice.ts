import fetchURL from '../../app/fetchURL';
import { createDataSlice } from '../../app/createSliceModule';

const fetchDataSearch = fetchURL("dataSearch/fetchDataSearch")
const fetchLaunchData = fetchURL("launchData/fetchLaunchData")

const dataSearchSlice = createDataSlice('dataSearch', fetchDataSearch)
const launchDataSlice = createDataSlice('launchData', fetchLaunchData)

const dataSearchReducer = dataSearchSlice.reducer;
const launchDataReducer = launchDataSlice.reducer;

export {
    fetchDataSearch,
    fetchLaunchData,
    dataSearchReducer,
    launchDataReducer
};
