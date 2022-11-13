
const Input = ({placeholder,change,keyDown}) => <input className="w-full bg-transparent text-[12px] text-slate-200 placeholder:text-slate-300 border-b-[1px] pb-1 border-slate-300/50 focus:border-slate-300" onChange={change} onKeyDown={keyDown} placeholder={placeholder}/>

export default Input