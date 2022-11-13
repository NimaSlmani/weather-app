import { useSelector } from "react-redux"
import Header from "./Header"
import Loading from "./Loading"

const Layout = ({children}) => {
  let {loading} = useSelector(state => state.style)
  return (
    loading ?
    <Loading/>
    :    
    <div className="w-full h-screen overflow-hidden bg-weather-background bg-cover bg-center bg-no-repeat relative p-[40px] flex flex-col justify-between">
      <Header/>
      {children}
    </div>
  )
}

export default Layout