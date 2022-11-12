
import React, {useState} from 'react';
import Result from './Result';
import axios from 'axios';
import {toast} from 'react-toastify';
import "../Styles/upload.css";

function AllInOne() {
  const [file, setFile] = useState()
  const [result, setResult] = useState(false)
  const [resultText, setResultText] = useState("")

  function handleChange(event) {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
  }
  
  async function handleSubmit(event) {
    toast.loading("Analyzing!")
    event.preventDefault()
    console.log("file",file)
    const url = 'http://localhost:8083/rest/detection';
    const formData = new FormData();
    formData.append('file', file, file.name);
    // formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const {data} = await axios.post(url, formData) 
    setResult(true)
    console.log(data)
    setResultText(data)
  }

  return ( 
    result?<Result text={resultText} file={file}/>: 
    // <div className="main">
    <div className='main2'>
      <div className='text2'>
       <div className='txt'> 
       <h1>Cloud Computing Technology!</h1> 
        <h3>Upload your handwriting in JPG/PNG</h3></div>
        <div className='submit'>
        <div className='sbmt'>  
        <form onSubmit={handleSubmit} className="form-css">
          <input type="file" onChange={handleChange}/>
          <button type="submit" className='upload'>Recognize</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        // </div>
    
  );
}

export default AllInOne;

