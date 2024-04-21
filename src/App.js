import { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import axios from 'axios';

//create context
export const InputContext = createContext();


function App() {

  const [inputValue, setInputValue] = useState({
    url: '',
    color: ''

  });

  const [response , setResponse] = useState('');
  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(false);
  const [selectedFrame , setSelectedFrame] = useState('');
  const [selectedPattern , setSelectedPattern] = useState('');

  // 17136810-c264-11ee-8f57-d181f4a9adb5



  const config = {
    headers : {Authorization : 'Bearer 17136810-c264-11ee-8f57-d181f4a9adb5'}
  }

  const bodyParameters = {
    "colorDark": inputValue.color,
    "eye_outer": "eyeOuter2",
    "eye_inner": "eyeInner1",
    "qrData": "pattern0",
    "backgroundColor": "rgb(255,255,255)",
    "transparentBkg": false,
    "qrCategory": "url",
    "text": inputValue.url
  }

  const getQrCode = async () => {
     try{
      setLoading(true);
      const res = await axios.post(
        'https://qrtiger.com/api/qr/static',
        bodyParameters,
        config
      );
      setResponse(res.data.url);

     } catch(err) {
      setError(err);
     } finally{
      setLoading(false);
     }
  }

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error
  }


  return (
    <div className="bg-neutral-100 h-screen pt-20 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
          <InputForm/>
          <QrCode/>
          </InputContext.Provider>
          
        </div>
      </div>
    </div>

  );
}

export default App;
