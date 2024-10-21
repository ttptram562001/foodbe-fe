import {createSlice} from "@reduxjs/toolkit";

export const commonSlice = createSlice({
    name: "common",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {
        info: {
            accessToken: ""
        }
    },
    reducers: {
    },
    extraReducers: (builder) => {
    },
});

export const CommonAction = {
    ...commonSlice.actions,
};

// Other code such as selectors can use the imported `RootState` type
export const CommonSelector = {
};

export default commonSlice.reducer;
