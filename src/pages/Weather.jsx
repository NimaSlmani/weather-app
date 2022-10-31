import { WiDaySunny } from 'weather-icons-react';
import {RiSettings5Fill} from 'react-icons/ri'
const Weather = () => {
  return (
    <div className='flex flex-col justify-between h-full p-[50px] text-slate-200 overflow-y-auto'>
        <header className='flex justify-between items-center'>
            <span>UIMINUT</span>
            <RiSettings5Fill/>
        </header>
        <div className='flex flex-col items-center text-center w-full'>
            <h2 className='text-[130px] font-medium'>16&#176;</h2>
            <div className='w-full'>
                <div className='pb-[25px]'>
                    <h3 className='text-[30px] font-medium mt-[-20px]'>London</h3>
                    <p className='text-[16px]'>06:09 - Monday,9 Sep'19</p>
                </div>
                <div className='flex items-center flex-col pt-[25px] border-t-[1.5px] w-full'>
                    <WiDaySunny size={80}/>
                    <p className='text-[16px]'>Cloudy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather