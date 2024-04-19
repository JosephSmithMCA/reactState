import React from "react";

function Forms(){
    const [formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isFriendly:true,
        employment:"",
        favColor:""
    })

    console.log(formData)

    function handleEvent(event){
        //console.log(event.target.value)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
                //[event.target.name] : event.target.value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        console.log(formData)
    }

    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Forms</h1>
            </div>
            <div className="col-sm-6">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" name="firstName" id="" onChange={handleEvent} value={formData.firstName} />
                    <input type="text" placeholder="Last Name" name="lastName" id="" onChange={handleEvent}   value={formData.lastName} />
                    <input type="email"placeholder="E-Mail@email.com" name="" id="" onChange={handleEvent}  value={formData.email} />

                    <textarea name="comments" placeholder="Comments..." onChange={handleEvent} value={formData.comments} id="" cols="30" rows="10"></textarea>

                    <input type="checkbox" id="isFriendly" name="isFriendly" value={formData.isFriendly} checked={formData.isFriendly} onChange={handleEvent} />
                    <label htmlFor="isFriendly">Are you friendly</label>


                    <fieldset>
                        <legend>What is your current employment?</legend>

                        <input type="radio" name="employment" id="unemployed" value="unemployed"  onChange={handleEvent} checked={formData.employment === "unemployed"}/>
                            <label htmlFor="unemployed"> Unemployed</label>
                            <br />
                        <input type="radio" name="employment" id="full-time" value="full-time" onChange={handleEvent} checked={formData.employment === "full-time"}/>
                            <label htmlFor="full-time">Full-Time</label>
                            <br />
                        <input type="radio" name="employment" id="part-time"value="part-time" onChange={handleEvent} checked={formData.employment === "part-time"}/>
                            <label htmlFor="part-time">Part-Time</label>
                            <br />
                    </fieldset>

                    <br />
                    <label htmlFor="favColor">What is your favorite color?</label>
                    <br />
                    <select 
                        name="favColor" 
                        id="favColor"
                        value={formData.favColor}
                        onChange={handleEvent}
                    >
                        <option value="">Choose Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                    <br />
                    <br />

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Forms