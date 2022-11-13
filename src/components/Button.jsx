
const Button = ({Icon,click,cls}) => <div onClick={click} className={`w-[50px] h-[50px] bg-orange center text-white transition-all ease-in-out cursor-pointer duration-200 hover:bg-red ${cls}`}><Icon size={20}/></div>

export default Button