import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import "./Exercises.css";

const Exercises = ({ btnClicked, dumble }) => {
  // const {btnClicked,  dumble} = props;
  const [exercises, setExcercises] = useState([]);
  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setExcercises(data));
  }, []);

  return (
    <div>
      <h2 className="header-title">{dumble} DUET GAMING CLUB</h2>
      <p className="header-subtitle">Select Today's Exercise</p>
      <div className="exercises">
        {exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
            btnClicked={btnClicked}
          ></Exercise>
        ))}
      </div>
      <div className="questions">
        <div className="question">
          <h4>How Does React Work?</h4>
          <p>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes.
          </p>
        </div>
        <div className="question">
          <h4>Props vs State?</h4>
          <p>
            The key difference between props and state is that state is internal
            and controlled by the component itself while props are external and
            controlled by whatever renders the component.
          </p>
        </div>
        <div className="question">
          <h4>What else useEffect does except data load</h4>
          <p>
          The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.
          useEffect also gives us the ability to render something when some other data has changed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
