import { useDispatch } from 'react-redux'

import { setOpenSidebar } from '../features/styleSlice'

import {RiSettings5Fill} from 'react-icons/ri'

const Header = () => {
  let dispatch = useDispatch()

  return (
    <header className='flex justify-between w-full text-slate-300'>
      <span className='text-bold text-[14px]'>
        <span className='text-orange'>R&N </span>
        MINUT
      </span>
      <RiSettings5Fill className='lg:hidden' onClick={()=>dispatch(setOpenSidebar(true))}/>
    </header>
  )
}

export default Header