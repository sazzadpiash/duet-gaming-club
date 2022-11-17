import React from "react";
import "./App.css";

import Exercises from "./components/Exercises/Exercises";
import Input from "./components/Input/Input";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [time, setTime] = useState(0);
  const btnClicked = (exTime) => {
    if (localStorage.getItem("exerciseTime")) {
      const getLocalStorageExTime = localStorage.getItem("exerciseTime");
      setTime(parseInt(getLocalStorageExTime)+exTime)
      localStorage.setItem("exerciseTime", parseInt(getLocalStorageExTime)+exTime);
    }
    else {
      setTime(time + exTime);
      localStorage.setItem("exerciseTime", time+exTime);
    }
  };
  const [breaktime, setBreaktime] = useState(0);
  const addBreak = (addBreakTime) => {
    if (localStorage.getItem("breakTime")) {
      const getLocalStorageBreakTime = localStorage.getItem("breakTime");
      setTime(parseInt(getLocalStorageBreakTime)+addBreakTime)
      localStorage.setItem("breakTime", parseInt(getLocalStorageBreakTime)+addBreakTime);
    }
    else {
      setTime(breaktime + addBreakTime);
      localStorage.setItem("breakTime", breaktime+addBreakTime);
    }
  };
  const dumble = <FontAwesomeIcon icon={faDumbbell} />
  const notify = () => {
    toast("Congratulations");
    setTime(0);
    setBreaktime(0);
    localStorage.setItem("exerciseTime", 0);
    localStorage.setItem("breakTime", 0);
  };

  return (
    <div className="App">
      <div className="main">
        {/* <button onClick={notify}>Hello</button> */}
        <div className="left-side">
          <Exercises btnClicked={btnClicked} dumble={dumble}></Exercises>
        </div>
        <div className="right-side">
          <Input
            exerciseTime={time}
            breaktime={breaktime}
            addBreak={addBreak}
            notify={notify}
          ></Input>
        </div>
      </div>
    </div>
  );
}
export default App;
