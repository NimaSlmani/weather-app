import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    openSidebar : false
}

export const styleSlice = createSlice({
    name: "style",
    initialState,
    reducers: {
        setLoading : (state,action) => {
            state.loading = action.payload
        },
        setOpenSidebar : (state,action) => {
            state.openSidebar = action.payload
        },
    }
})

export const {
    setLoading,
    setOpenSidebar
} = styleSlice.actions

export default styleSlice.reducer;