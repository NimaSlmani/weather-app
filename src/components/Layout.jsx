import { useSelector } from "react-redux"

import Carousel from "./Carousel"
import Loading from "./Loading"

const Layout = ({children}) => {
  let {loading} = useSelector(state => state.style)

  return (
    loading ? 
    <Loading/>
    :
    <div className="w-full h-screen text-slate-200 bg-slate-900 relative overflow-hidden overlay">
        <div className="w-full h-screen absolute">
            <Carousel/>
        </div>
        <div className="w-full h-screen absolute z-10 overflow-y-auto overflow-x-hidden">
            {children}
        </div>
    </div>
  )
}

export default Layout