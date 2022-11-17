import React from "react";
import "./Input.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Input = (props) => {
  let {exerciseTime, breaktime, addBreak, notify} = props;
  const localStorageExtime = localStorage.getItem("exerciseTime");
  const localStorageBreaktime = localStorage.getItem("breakTime");
  
  // set exercise time
  let setExcerciseTime = exerciseTime;
  if (localStorageExtime) {
    setExcerciseTime = parseInt(localStorageExtime);
  }
  else {
    setExcerciseTime = exerciseTime;
  }
  // set break time
  let setBreakTime = breaktime;
  if (localStorageBreaktime) {
    setBreakTime = parseInt(localStorageBreaktime);
  }
  else {
    setBreakTime = breaktime;
  }
  return (
    <div className="input-section">
      <div className="user-info">
        <div className="top">
          <img src="images/piash.jpg" alt=""></img>
          <div className="user-details">
            <h4>Sazzad Hossain</h4>
            Dhaka, Bangladesh
          </div>
        </div>
        <div className="bottom">
          <div>
            <span>58 kg</span>
            <p>Weight</p>
          </div>
          <div>
            <span>6.5 in</span>
            <p>Height</p>
          </div>
          <div>
            <span>22 y</span>
            <p>Age</p>
          </div>
        </div>
      </div>
      <div className="break-section">
        <h4>Add A  Break</h4>
        <div className="breaks">
          <button className="break-btn" onClick={()=>addBreak(10)}>10s</button>
          <button className="break-btn" onClick={()=>addBreak(20)}>20s</button>
          <button className="break-btn" onClick={()=>addBreak(30)}>30s</button>
          <button className="break-btn" onClick={()=>addBreak(40)}>40s</button>
        </div>
      </div>
      <div className="excercise-details">
        <h4>Exercise Details</h4>
        <div className="ex-time">
          <h5>Excercise Time</h5>
          <h5>{setExcerciseTime} seconds</h5>
        </div>
        <div className="ex-time">
          <h5>Break Time</h5>
          <h5>{setBreakTime} seconds</h5>
        </div>
      </div>
      <button className="active-btn" onClick={notify}>Activity Complited</button>
      <ToastContainer />
    </div>
  );
};

export default Input;
