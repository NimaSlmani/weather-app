import { 
       openweathermap_url,openweathermap_api_key,timeozone_api_key,timezone_url 
       } from "../utils/url";

import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { setLoading,setOpenSidebar } from "./styleSlice";
import { cellClecius } from "../utils/helperFunction";

const initialState = {
    location : null,
    city : null,
    city_name : '',
    err_city_name : false,
    time : ''
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setLocation : (state,action) => {
            state.location = action.payload
        },
        setCity : (state,action) => {
            state.city = action.payload
        },
        setCity_name : (state,action) => {
            state.city_name = action.payload
        },
        setErr_city_name : (state,action) => {
            state.err_city_name = action.payload
        },
        setTime : (state,action) => {
            state.time = action.payload
        }
    }
})

export const {
    setLocation,
    setCity,
    setCity_name,
    setErr_city_name,
    setTime
} = weatherSlice.actions

export const getCityLocation = (city,limit) => async (dispatch) => {
    try{
        dispatch(setLoading(true))
        let res = await axios.get(`${openweathermap_url}/geo/1.0/direct?q=${city}&limit=${limit}&appid=${openweathermap_api_key}`)
        res.data[0] && dispatch(getWeather(res.data[0].lat,res.data[0].lon))
        !res.data[0] && dispatch(setErr_city_name(true))
        dispatch(setOpenSidebar(false))
        dispatch(setLoading(false))
        dispatch(getTimezone(res.data[0].lat,res.data[0].lon))
        console.log(res.data[0].lat,res.data[0].lon);
        console.log(res);
    }catch (err) {
        console.log(err)
    }
}

export const getWeather = (lat,lon) => async (dispatch) => {
    try{
        dispatch(setLoading(true))    
        let res = await axios.get(`${openweathermap_url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweathermap_api_key}`)
        dispatch(setCity({
            clouds : res.data.clouds.all,
            min : cellClecius(res.data.main.temp_min),
            max : cellClecius(res.data.main.temp_max),
            clecius : cellClecius(res.data.main.temp),
            name : res.data.name,
            humidity : res.data.main.humidity,
            pressure : res.data.main.pressure,
            description : res.data.weather[0].description,
            country : res.data.sys.country
        }))
        dispatch(setLoading(false))  
    }catch (err) {
        console.log(err)
    }
}

export const getTimezone = (lat,lon) => async (dispatch) => {
    try{
        let res = await axios.get(`${timezone_url}?apiKey=${timeozone_api_key}&lat=${lat}&long=${lon}`)
        dispatch(setTime(res.data.date_time_txt))
    } catch(err){
        console.log(err)
    }
}
export default weatherSlice.reducer;