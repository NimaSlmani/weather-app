import { useDispatch,useSelector } from "react-redux"

import { setCity_name,getCityLocation } from "../features/weatherSlice"
import { setOpenSidebar } from "../features/styleSlice"

import {BiSearch} from "react-icons/bi"
import {RiCloseFill} from "react-icons/ri"


import Button from "./Button"
import Input from "./Input"
import Sidebar_Cities from "./Sidebar_Cities"
import Sidebar_Details from "./Sidebar_Details"

const Sidebar = () => {
  let {city_name} = useSelector(state=>state.weather)
  let {openSidebar} = useSelector(state=>state.style)

  let dispatch = useDispatch()

  let weatherSearch = (e) => {
    if(e.key === 'Enter'){
      dispatch(getCityLocation(city_name,1))
    }
  }

  return (
    <div className={`w-full h-screen overflow-y-auto backdrop-blur-md backdrop-brightness-90 absolute text-white p-[30px] pt-0 ${openSidebar ? "right-0" : "right-[-100%]"} bg-black/50 transition-all duration-300 ease-in-out top-0 lg:right-0 lg:w-1/3 xl:w-1/4 `}>
        <div className="absolute top-0 right-0">
            <Button Icon={BiSearch} click={()=>dispatch(getCityLocation(city_name,1))} cls="hidden lg:flex" />
            <Button Icon={RiCloseFill} click={()=>dispatch(setOpenSidebar(false))} cls="lg:hidden" />
        </div>
        <div className=" pt-[22px] pr-[55px]">
            <Input placeholder="Another Location" keyDown={(e)=>weatherSearch(e)} change={(e)=>dispatch(setCity_name(e.target.value))}/>
        </div>
        <div className="w-full text-[12px]">
          <Sidebar_Cities/>
          <Sidebar_Details/>
        </div>
        
    </div>
  )
}

export default Sidebar