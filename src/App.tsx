import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

import "./App.css";
import { CurrentExerciseDetails } from "./components/product/CurrentExerciseDetails";
import { Day } from "./types/Day";
import { ProgressBar } from "./components/common/ProgressBar";
import { plans } from "./data/plans";

function App() {
  const defaultSelectedWeekIndex = 0;
  const defaultSelectedDay = "monday";
  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number>(
    defaultSelectedWeekIndex,
  );
  const [selectedDay, setSelectedDay] = useState<Day>(defaultSelectedDay);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);
  const [completed, setCompletedExercises] = useState(0);

  const plan = plans[0];
  const currentWeek = plan[selectedWeekIndex];
  const currentDay = currentWeek.cyclesByDay[selectedDay];
  const exercise = currentDay[currentExerciseIndex];
  const total = currentDay.length;
  const remaining = total - completed;
  const selectableDays = Object.keys(
    currentWeek.cyclesByDay,
  ) as (keyof typeof currentWeek.cyclesByDay)[];

  const handleNextExerciseClick = () => {
    setCompletedExercises(completed + 1);
    setCurrentExerciseIndex(currentExerciseIndex + 1);
  };
  const handlePreviousExerciseClick = () => {
    setCompletedExercises(completed - 1);
    setCurrentExerciseIndex(currentExerciseIndex - 1);
  };
  const handleSelectDayClick = (day: Day) => {
    setCompletedExercises(0);
    setSelectedDay(day);
    setCurrentExerciseIndex(0);
  };
  const handleSelectWeekClick = (weekIndex: number) => {
    setCompletedExercises(0);
    setSelectedWeekIndex(weekIndex);
    setCurrentExerciseIndex(0);
  };

  return (
    <div className="App d-flex flex-column" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-between">
        {plan.map((week, weekIndex) => {
          return (
            <div
              key={`selectWeekButton-${weekIndex}`}
              role="button"
              onClick={() => {
                handleSelectWeekClick(weekIndex);
              }}
              className={`w-100 text-center ${
                selectedWeekIndex === weekIndex ? "bg-primary text-white" : ""
              }`}
            >
              {week.name}
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-between">
        {selectableDays.map((day: Day, dayIndex) => {
          return (
            <div
              key={`selectDayButton-${dayIndex}`}
              role="button"
              onClick={() => {
                handleSelectDayClick(day);
              }}
              className={`w-100 text-center ${
                selectedDay === day ? "bg-primary text-white" : ""
              } ${
                currentWeek.cyclesByDay[day].length > 0
                  ? ""
                  : "bg-secondary text-white"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
      {total > 0 && (
        <div className="h-100">
          <ProgressBar completed={completed} remaining={remaining} />
          {remaining > 0 ? (
            <div className="d-flex justify-content-center h-100">
              <div
                className={`${
                  completed > 0 ? "bg-primary" : "bg-secondary"
                } px-4 text-white d-flex`}
                role="button"
                onClick={() => {
                  if (completed > 0) {
                    handlePreviousExerciseClick();
                  }
                }}
              >
                <div className="my-auto">Back</div>
              </div>
              <CurrentExerciseDetails {...exercise} className="m-auto" />
              <div
                className={`${
                  remaining > 0 ? "bg-primary" : "bg-primary"
                } px-4 text-white d-flex`}
                role="button"
                onClick={() => {
                  if (remaining > 0) {
                    handleNextExerciseClick();
                  }
                }}
              >
                <div className="my-auto">Next</div>
              </div>
            </div>
          ) : (
            <div className="h-100 d-flex">
              <h1 className="text-center m-auto">Workout Complete!</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
