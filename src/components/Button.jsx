const Button = ({Icon}) => {
  return (
    <div className="text-white w-[50px] h-[50px] bg-orange center cursor-pointer transition-all hover:bg-red">
        <Icon size={18}/>
    </div>
  )
}

export default Button