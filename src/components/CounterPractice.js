import React from "react";

function NumCounter(props){

    return(
        <div className="col-sm-4 text-center">
            <h3>Current Number:{props.number} </h3>
        </div>
    )
}

function CounterPractice(){
    const [count, setCount] = React.useState(0)

    function add(){

        //frist way to pass new Values to useState
        //setCount( function (oldvalue){
        //    return oldvalue + 1
        //})

        //SECOND WAY TO PASS new values to useState varible
        //when setting new parameter always add "prev"
        //ie. "prevCount"
        
        setCount(prevCount => prevCount + 1)
    }

    function subtract(){

        setCount(prevCount => prevCount - 1)
    }

    
    return(
        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Counter Practice</h1>
            </div>
            <div className="col-sm-4 text-center">
                <input onClick={add} type="button" value="Add" />
            </div>
            <NumCounter number = {count}/>
            <div className="col-sm-4 text-center">
                <input onClick={subtract} type="button" value="Subtract" />

            </div>
        </div>
    )
}

export default CounterPractice;