const Cities = () => {
    let cities_name = ['Birmingham','Manchester','New Yourk','California']
    return (
    <ul className="py-[35px] text-[12px] text-slate-200/80">
        {
            cities_name.map((city,index)=>
                <li
                    className={
                        cities_name.length - 1 === index ? "hover:text-slate-100 cursor-pointer" : "pb-[20px] hover:text-slate-100 cursor-pointer"
                    }
                    key={index}
                >
                    {city}
                </li>
            )
        }
    </ul>
    )
}

export default Cities