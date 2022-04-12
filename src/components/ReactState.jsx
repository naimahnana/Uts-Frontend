import {useState} from "react";

const ReactState =()=>{
    const[test,setTest]=useState(0) 
    let x = 0

    const tambah = () =>{
        setTest(test=>test+1)
        x=x+1

        console.log('useState='+test);
        console.log('variable='+x);
    }
    return(
        <div>
            <p>state=(test)</p>
            <p>variable={x}</p>
            <button className="btn btn-ptimary" onClick={tambah}>tambah</button>
        </div>
    )
}

export default ReactState;