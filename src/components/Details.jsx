import { useSelector } from "react-redux"

const Details = () => {
    let {city} = useSelector(state => state.weather)

    let details = [
        {
            name : 'Pressure',
            amount : `${city?.pressure} PS`
        },
        {
            name : 'Cloudy',
            amount : city?.clouds
        },
        {
            name : 'Humidity',
            amount : `${city?.humidity}%`
        },
    ]
    return (
      <ul className="py-[35px] text-[12px] text-slate-200/80">
          {
              details.map((detail,index)=>
                  <li key={index} className="pb-[20px] flex justify-between">
                      <span>{detail.name}</span>
                      <span>{detail.amount}</span>
                  </li>
              )
          }
          <li className="pb-[20px] flex justify-between">
            <span>Min</span>
            <span>{city?.min}&deg;</span>
          </li>
          <li className="pb-[20px] flex justify-between">
            <span>Max</span>
            <span>{city?.max}&deg;</span>
          </li>
      </ul>
    )
}

export default Details