import { useDispatch,useSelector } from 'react-redux';

import {RiSettings5Fill} from 'react-icons/ri'

import { setOpenSidebar } from '../features/styleSlice';

import Weather from '../components/Weather';

import {WiDaySleetStorm,WiDaySnowThunderstorm,WiDayStormShowers,WiDaySnow,WiDaySunny,WiFog,WiDayFog} from "react-icons/wi"

const Home = () => {
    let {city} = useSelector(state => state.weather)
    let dispatch = useDispatch()

    let weatherIcons = {
        Thonderstrom : <WiDaySnowThunderstorm className="text-[80px] md:text-[40px]"/>,
        Drizzle : <WiDaySleetStorm className="text-[80px] md:text-[40px]"/>,
        Rain : <WiDayStormShowers className="text-[80px] md:text-[40px]"/>,
        Snow : <WiDaySnow className="text-[80px] md:text-[40px]"/>,
        Atmosphere : <WiFog className="text-[80px] md:text-[40px]"/>,
        Clear : <WiDaySunny className="text-[80px] md:text-[40px]"/>,
        Clouds : <WiDayFog className="text-[80px] md:text-[40px]"/>
    }
    return (
        <div className='flex flex-col justify-between h-full p-[50px] text-white overflow-y-auto'>
            <header className='flex justify-between items-center text-slate-300'>
                <span>UIMINUT</span>
                <RiSettings5Fill className='lg:hidden' onClick={()=>dispatch(setOpenSidebar(true))}/>
            </header>
            <Weather city={city} icons={weatherIcons}/>
        </div>
    )
}

export default Home