import InputField from "./InputField"
import InputColor from "./InputColor"
import { useContext } from "react"
import { InputContext } from "../App"

const InputForm = () => {

  const { getQrCode , inputValue} = useContext(InputContext);
  const handleSubmit = () => getQrCode();

  return (
    <div className="col-span-2 p-10 grid gap-6">
        <InputField/>
        <InputColor/>
        <button 
        disabled={!inputValue.url}
        onClick={handleSubmit}
        className="bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4
        hover:bg-blue-500 disabled:bg-gray-400"
        >Generate</button>
    </div>
  )
}

export default InputForm