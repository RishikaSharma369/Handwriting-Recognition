import {useEffect} from "react";
// import "./styles/Result.scss";
import image1 from '../images/cyber-bg.png'
const Result = ({file,text}) => {
  useEffect(() => {
    console.log(file)
    console.log(text)
  }, [])
  return (
    <div>
       
         <h3>Recognizing is this easy!</h3>
          
        
        {/* <div><img width='100%' height='400px' src={image1} alt="" /></div> */}
        <h1>Successful!</h1>
        <textarea
          name="text"
          id="textResult"
          cols="52"
          rows="7"
          maxLength={200}
          disabled
          value={text}
        ></textarea>
    
    </div>
  );
};

export default Result;
