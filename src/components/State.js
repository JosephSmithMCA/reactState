//import React, {useState} from "react"
import React from 'react'


function State(){
    //one way to call state
    //const [result, func] = React.useState('No');
    //second way to call state
    //const resultsecond = useState();

    //React practice result is varible name of default value
    //setResult is a function
    const [result, setResult] = React.useState('No');


    console.log(result)
    //Recieved an ARRAY with two values
    //['Hello World', func()]

    //result[0] renders 'No'

    function changeAnswer(){
        //anytime you want a new value, youll call setNAME() with value inside ('VALUE')
        setResult('Yes')
    }




    return(
        <div className="row">
            <div className="col-sm-12">
                <h3 onClick={changeAnswer}>Is State important?</h3>
            </div>
            <div className="col-sm-12">
                <h5>{result}</h5>
            </div>
        </div>
    )
}

export default State