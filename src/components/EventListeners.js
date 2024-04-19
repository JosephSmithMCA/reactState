

function EventListeners(){
//onClick
//onMouseHover
//onMouseClick

//this function has to be between return and inside component
    function handleClick(){
        console.log('Im Clicked')
    }

    function imgHover(){
        console.log('You have hovered the log')
    }

    return(
        <div className="row">
            <div className="col-sm-12">
                <img onMouseEnter={imgHover} src="https://picsum.photos/640/360" alt="" />
            </div>
            <div className="col-sm-12">
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
}

export default EventListeners;