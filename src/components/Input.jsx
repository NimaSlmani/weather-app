const Input = ({placeholder,change,keydown}) => <input
                                    placeholder = {placeholder}
                                    className = "text-[12px] outline-none bg-transparent border-b text-slate-200 border-slate-200/40 w-full pb-[5px] placeholder:text-slate-200/80 focus:border-slate-200"
                                    onChange = {change}
                                    onKeyDown = {keydown}
                                />
export default Input