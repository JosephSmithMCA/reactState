import React from "react";

function ConditionalRendering(){

    const [isShown, setIsShown] = React.useState(false)
    const [messsages, setMessages] = React.useState(['a'])
    //let cond1 = true
    //let cond2 = true
    //if (cond1 && cond2 != true) {
    //    console.log('I have been ran')
    //}

    function toggleShown(){
        setIsShown(prevIsShown => !prevIsShown)
    }

    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Conditional Rendering</h1>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    { isShown && <p>Hello I'm Rendering</p>}
                    <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Text</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    {messsages.length > 0 ? <h3>You have {messsages.length} unread {messsages.length > 1 ? 'messages' : 'message'}</h3> : <h3>You're all caught up</h3>}
                    {/* { messsages.length > 0 && <h3>You have {messsages.length} unread messages</h3>} */}
                </div>
            </div>
        </div>
    )
}

export default ConditionalRendering