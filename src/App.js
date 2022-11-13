import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";


import {getCityLocation} from "./features/weatherSlice"

import Home from "./pages/Home";

import 'swiper/css';


const App = () => {
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCityLocation('Tehran',1))
  },[])

  return (
    <Home/>
  )
}

export default App
