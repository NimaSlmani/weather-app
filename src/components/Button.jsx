const Button = ({Icon,cls,click}) => {
  return (
    <div onClick={click} className={`text-white w-[50px] h-[50px] bg-orange center cursor-pointer transition-all hover:bg-red ${cls}`}>
        <Icon size={18}/>
    </div>
  )
}

export default Button