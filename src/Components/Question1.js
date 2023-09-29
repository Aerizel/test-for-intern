import React,{useState,useRef} from "react";
import "../Style/Question1.css";

export default function Question1() {

    const [person, setPerson] = useState({
        name: '',
        age: 0,
        address: '',
    });
    
    //Declare new variable for store value from input form
    const getName = useRef();
    const getAge = useRef();
    const getAddress = useRef();
    
    function updateState(event) {
        event.preventDefault();

        //store current value of state into variable before update
        let name = person.name;
        let age = person.age;
        let address = person.address;
        
        //Check if there are value from input form, if it have then store new value if not then use the current value 
        if(getName.current.value) { name = getName.current.value };
        if(getAge.current.value) { age = getAge.current.value };
        if(getAddress.current.value) { address = getAddress.current.value };

        //Store new value into array
        const newValue = {name: name, age: age, address: address}

        //Set state with new array 
        setPerson(newValue);

    }

    return(
        <div className="question-one">
            <h3>Current Value in state.</h3>
            <div className="display">
                <p>name : {person.name}</p>
                <p>age : {person.age}</p>
                <p>address : {person.address}</p>
            </div>
            <div className="input">
                <form onSubmit={updateState}>
                    <input type="text" ref={getName} placeholder="insert name here" />
                    <input type="number" ref={getAge} min={1} placeholder="insert birthdate here" />
                    <textarea name="address" rows={4} ref={getAddress} placeholder="insert address here" />
                    <button type="submit">ตกลง</button>
                </form>
            </div>
        </div>
    );
}