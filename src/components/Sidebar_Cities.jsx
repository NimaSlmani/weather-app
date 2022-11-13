import { useDispatch } from "react-redux"
import { getCityLocation } from "../features/weatherSlice"


const Sidebar_Cities = () => {
    let dispatch = useDispatch()
    let cities= ['Tehran','Manchester','Vancouver','California','Birmingham']

    return (
        <ul className="py-[30px]">
            {
                cities.map((city,index)=>
                    <li
                        key={index}
                        className={`${cities.length -1 !== index && 'mb-4'} text-slate-300/80 cursor-pointer hover:text-slate-200`}
                        onClick={()=>dispatch(getCityLocation(city,1))}
                    >
                        {city}
                    </li>
                )
            }
        </ul>
    )
}

export default Sidebar_Cities