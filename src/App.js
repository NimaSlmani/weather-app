import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";


import {getCityLocation} from "./features/weatherSlice"

import Layout from "./components/Layout";

import 'swiper/css';


const App = () => {
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCityLocation('Tehran',1))
  },[])

  return (
    <Layout>dsjkvs</Layout>
  )
}

export default App
