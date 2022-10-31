import Carousel from "./Carousel"

const Layout = ({children}) => {
  return (
    <div className="w-full h-screen text-slate-200 bg-slate-900 relative overflow-hidden">
        <div className="w-full h-screen absolute">
            <Carousel/>
        </div>
        <div className="w-full h-screen absolute z-10 overflow-y-auto">
            {children}
        </div>
    </div>
  )
}

export default Layout