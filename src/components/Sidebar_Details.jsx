import { useSelector } from "react-redux"

const Sidebar_Details = () => {
    let {city} = useSelector(state => state.weather)
    let details = {
        Pressure : city?.pressure,
        Clouds : city?.clouds,
        Humidity : city?.humidity,
        Min : city?.min,
        Max : city?.max
    }
    return (
        <div className='text-slate-300/80'>
            <h2 className="pb-1 border-b-[1px] border-slate-300/50">Weather Details</h2>
            <ul className="py-[30px]">
                {Object.keys(details).map((key, index) => 
                    <li key={index} className={`${details.length -1 !== index && 'mb-4'} flex justify-between `}>
                        <span>{key}</span>
                        <span>{details[key]}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar_Details