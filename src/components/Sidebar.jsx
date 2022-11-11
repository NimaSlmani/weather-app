import { useSelector,useDispatch } from 'react-redux';

import {FiSearch} from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';

import Input from './Input';
import Button from './Button';
import Header from './Header';
import Cities from './Cities';
import Details from './Details';

import { setOpenSidebar } from '../features/styleSlice';
import { setCity_name,getCityLocation } from '../features/weatherSlice';

const Sidebar = () => {

  let {openSidebar} = useSelector(state => state.style)
  let {city_name} = useSelector(state => state.weather)

  let dispatch = useDispatch()

  let searchHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(getCityLocation(city_name,1))
    }
  }

  return (
    <div className={
      `w-full absolute h-screen ${openSidebar === true ? "right-[0]" : "right-[-100%]"} backdrop-blur-sm overflow-y-auto ease-in transition-all bg-black/25  lg:right-0 lg:w-3/12`
    }>
      <div className="relative w-full h-full p-[15px] lg:p-[20px] lg:px-[30px]">
        <header className='pt-[7px] pr-[50px] lg:pt-[3px]'>
          <Input placeholder="Another Location" change={e=>dispatch(setCity_name(e.target.value))} keydown={e=>searchHandler(e)}/>
          <div className="absolute top-0 right-0">
            <Button
              Icon={FiSearch}
              cls = 'hidden lg:flex'
              click={()=>dispatch(getCityLocation(city_name,1))}
            />
            <Button
              click={()=>dispatch(setOpenSidebar(false))}
              Icon={RiCloseLine}
              cls = 'lg:hidden'
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
