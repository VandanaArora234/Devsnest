import { useState } from "react";

const But = () => {

    const state = useState();
    const [count, setCount] = useState(65);

function IncNum(){

    if(count>=90)
    setCount(count);

    else
    setCount(count+1);
    
}
function DecNum(){
    

    if(count<=65)
    setCount(count);

    else
    setCount(count-1);
    
}

    return (

        <div className="card">
        <h1>{String.fromCharCode(count)}</h1>
  <button className="button" onClick={IncNum}> Increase </button>
  <button className="back" onClick={DecNum}>Decrease</button>
        </div>

    );

}

export default But;