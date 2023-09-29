import React,{useState} from 'react';
import './App.css';
import Question1 from './Components/Question1';
import Question2 from './Components/Question2';
import Question3 from './Components/Question3';

function App() {

  const [selectQuestion,setSelectQuestion] = useState(1);

  return (
    <>
      <div className="header">
        <h1>Select answer of question</h1>
        <div className="select">
          <ul>
            <li onClick={()=>{setSelectQuestion(1)}}>Question one</li>
            <li onClick={()=>{setSelectQuestion(2)}}>Question two</li>
            <li onClick={()=>{setSelectQuestion(3)}}>Question three</li>
          </ul>
        </div>
      </div>
      {selectQuestion===1 ? <Question1 /> : ''}
      {selectQuestion===2 ? <Question2 /> : ''}
      {selectQuestion===3 ? <Question3 /> : ''}
    </>
  );
}

export default App;
