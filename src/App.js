import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

import {getCityLocation} from "./features/weatherSlice"

import 'swiper/css';

const App = () => {
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCityLocation('Tehran',1))
  },[])

  return (
    <Layout>
      <Sidebar/>
      <Home/>      
    </Layout>
  )
}

export default App
