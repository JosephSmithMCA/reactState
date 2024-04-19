import React from "react"

function ComplexObjectFavorite(props){


    let favorite = props.colored ? "favoriteTrue" : "favoriteFalse"
    return(
        <div>
            <div onClick={props.handleClick} className={`text-center ${favorite}`}>x</div>
        </div>

    )
}

function ComplexObject(){
    const [contact, setContact] = React.useState({
        firstName: "Joseph",
        lastName:"Smith",
        phone: "+1 (999) 999-9999",
        email: "ungabunga@leonnnn.com",
        isFavorite: false
    })


function toggleFavorite(){
    setContact(prevContact => {
        return {
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }
    })
}
    return(
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-12">
                <h1>Complex Objects</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    <ComplexObjectFavorite colored={contact.isFavorite} handleClick={toggleFavorite}/>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                    
                </div>
            </div>
        </div>
    )
}



function ComplexArray(){

        //const thingsArray = ['Thing 1', 'Thing 2'];
        const [thingsArray, setThingsArray] = React.useState(['Thing 1 ', 'Thing 2 '])
        const ThingsElements = thingsArray.map(
            (thing) => <p>{thing}</p>
        )
    
        function addItem(){
            const newThingText = `Thing ${thingsArray.length + 1}`
            //thingsArray.push(newThingText)
            setThingsArray(prevThingsArray => [...prevThingsArray, `${newThingText}  `])
            console.log(thingsArray)
        }

    return(
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-12">
                    <h2>Complex State Array</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <button onClick={addItem}>Add Item</button>
                    
                </div>
                <div className="col-sm-12">
                    {thingsArray}
                </div>
            </div>
        </div>
    )
}


function ComplexState(){

    return(
        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Complex State</h1>
            </div>
            <ComplexArray/>
            <ComplexObject/>
        </div>
    )
}

export default ComplexState