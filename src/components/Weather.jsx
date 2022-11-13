import { useSelector } from "react-redux"

import {WiDaySleetStorm,WiDaySnowThunderstorm,WiDayStormShowers,WiDaySnow,WiDaySunny,WiFog,WiDayFog} from "react-icons/wi"


const Weather = () => {
  let {city,time} = useSelector(state=>state.weather)
  
  return (
    <div className="text-slate-300 text-center md:flex md:items-end md:text-left">
      <h1 className="text-white text-[150px] font-medium mb-[-40px] md:mb-0 md:text-[180px] md:leading-none">{city?.clecius}&deg;</h1>

      <div className="border-b-[1px] border-slate-300/70 pb-4 md:border-b-0 md:pb-0 md:mb-[25px]">
        <h2 className="text-[40px] font-medium">
          {city?.name}
          <span className="text-[20px] text-yellow-400">,{city?.country}</span>
        </h2>
        <p className="text-[12px] text-slate-300/90 md:mt-[-10px]">{time}</p>
      </div>

      <div className="flex items-center flex-col pt-4 md:pt-0 md:ml-10 md:mb-[25px] text-slate-300">
        <WiDaySnowThunderstorm className="text-[80px] md:text-[40px]"/>
        <p className="md:mt-[-5px] text-[12px] text-slate-300/90">{city?.description}</p>
      </div>
    </div>
  )
}

export default Weather