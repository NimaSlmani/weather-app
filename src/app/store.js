import { configureStore } from '@reduxjs/toolkit';
import style from "../features/styleSlice";
import weather from "../features/weatherSlice";

export const store = configureStore({
    reducer: {
      style : style,
      weather : weather
    },
});