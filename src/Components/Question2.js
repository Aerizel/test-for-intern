import React,{useState} from "react";
import "../Style/Question2.css"

export default function Question2() {

  // Initialize the count state as an object
  const [count, setCount] = useState({ type: "even", count: 0 });

  // Function to increment the count
  const handleIncrement = () => {

    //Increase current number from useState by one
    const calNumber = count.count + 1;

    //Check if number are event or odd then update state
    if(calNumber%2 === 0) {
        setCount({ type: "even", count: calNumber});
    } else {
        setCount({ type: "odd", count: calNumber});
    }

  };

  // Function to decrement the count
  const handleDecrement = () => {

    //Decrease current number from useState by one
    const calNumber = count.count - 1;

    //Check if number are event or odd and current number is not negative number then update state
    if(calNumber%2 === 0 && calNumber>=0) {
        setCount({ type: "even", count: calNumber});
    } else if(calNumber>=0) {
        setCount({ type: "odd", count: calNumber});
    } 

  };

  return (
    <div className="question-two">
      <h1>Count: {count.count}</h1>
      <p>Type: {count.type}</p>
      <div className="choose-btn">
        <button className="btn in" onClick={handleIncrement}>Increment</button>
        <button className="btn de" onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );

}