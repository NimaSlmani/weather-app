import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Weather = ({city,icons}) => {
    let {time} = useSelector(state => state.weather)
    let [Icon,setIcon] = useState(icons.Thonderstrom)

    useEffect(()=>{
        getWeatherIcon()
    },[city])

    let getWeatherIcon = () => {
        let clecius = city?.clecius
        switch(clecius) {
            case clecius => 200 && clecius <= 232:
              setIcon(icons.Thonderstrom)
              break;
            case clecius => 300 && clecius <= 321:
              setIcon(icons.Drizzle)
              break;
            case clecius => 500 && clecius <= 531:
              setIcon(icons.Rain)
              break;
            case clecius => 600 && clecius <= 622:
              setIcon(icons.Snow)
              break;
            case clecius => 701 && clecius <= 781:
              setIcon(icons.Atmosphere)
              break;
            case clecius === 800:
              setIcon(icons.Clear)
              break;
            case clecius => 801 && clecius <= 804:
              setIcon(icons.Clouds)
              break;
            default:
        }
    }

    return (
      <div className='flex flex-col items-center text-center w-full md:flex md:flex-row md:text-left md:items-end'>
          <h2 className='text-[130px] font-medium md:text-[180px] md:leading-none'>{city?.clecius}&#176;</h2>
          <div className='w-full md:flex md:items-center md:pb-[15px]'>
            <div className='pb-[25px] md:pb-0 md:ml-3 md:mb-[-15px]'>
                <h3 className='text-[30px] font-medium mt-[-20px] md:text-[40px] md:leading-none'>
                    {city?.name}
                    <span className="text-[16px] text-yellow-400/80"> , {city?.country}</span>
                </h3>
                <p className='text-[14px] text-slate-300'>{time}</p>
            </div>
            <div className='flex items-center flex-col pt-[25px] border-t-[1.5px] w-full md:border-none md:pt-0 md:w-fit md:ml-8 md:text-slate-300 md:pb-[5px]'>
                {Icon}
                <p className='text-[14px]'>{city?.description}</p>
            </div>
          </div>
      </div>
    )
}

export default Weather