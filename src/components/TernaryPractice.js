import React from "react";

function TernaryPractice(){


    const murderIf = true;


    //first way of ternary operator
    //murderIf == condition being checked
    //let answer = murderIf === true ? "Yes" : "No"

    //TRUTHY/TRUE will be the left side of ":"
    //Falsy/False will be the right side of ":"
    //second way of ternary operator
    let answer = murderIf ? "Yes" : "No"


    return(
        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Ternary practice</h1>
            </div>
            <div className="col-sm-4">
                <h2>Was there a murder is savannah</h2>
                <h4>{answer}</h4>
            </div>
        </div>
    )
}

export default TernaryPractice;