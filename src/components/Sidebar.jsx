import { WiDaySunny } from 'weather-icons-react';
import {FiSearch} from 'react-icons/fi';

import Button from './Button';
import Header from './Header';
import Cities from './Cities';
import Details from './Details';

const Sidebar = () => {
  return (
    <div className="w-full absolute h-screen right-[100%] backdrop-blur-sm overflow-y-auto bg-black/25 sm:w-4/12 lg:w-3/12">
      <div className="relative w-full h-full p-[15px] lg:p-[20px] lg:px-[30px]">
        <header className='pt-[7px] pr-[50px] lg:pt-[3px]'>
          <Header text="Another Location" />
          <div className="absolute top-0 right-0">
            <Button
              Icon={FiSearch}
            />
          </div>
        </header>
        <Cities/>
        <Header text="Weather Details" />
        <Details/>
      </div>
    </div>
  )
}

export default Sidebar