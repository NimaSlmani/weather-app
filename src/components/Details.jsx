const Details = () => {
    let details = [
        {
            name : 'Cloudy',
            amount : '86%'
        },
        {
            name : 'Wind',
            amount : '8km/h'
        },
        {
            name : 'Humidity',
            amount : '62%'
        }
    ]
    return (
      <ul className="py-[35px] text-[12px] text-slate-200/80">
          {
              details.map((detail,index)=>
                  <li className="pb-[20px] flex justify-between">
                      <span>{detail.name}</span>
                      <span>{detail.amount}</span>
                  </li>
              )
          }
      </ul>
    )
}

export default Details