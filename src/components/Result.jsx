import {useEffect} from "react";
import '../Styles/result.css';
import image from "../images/gr.png"
const Result = ({file,text}) => {
  useEffect(() => {
    console.log(file)
    console.log(text)
  }, [])
  return (

    <div className="Result">
       <div class="pyro">
    <div class="before"></div>
    <div class="after"></div>
         <h3>Recognizing is this easy!</h3>
          
        
        <div className="displayImage">
          <img src={URL.createObjectURL(file)} alt="" />
        </div>
        <h1>Your Result</h1>
        <textarea
          name="text"
          id="textResult"
          cols="52"
         rows="4"
          maxLength={200}
          disabled
          value={text}
        ></textarea>
    </div>
    </div>
  );
};

export default Result;
