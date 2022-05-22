import { Day } from "./Day";
import { Workout } from "../types/Workout";

export type MovementsByDay = {
  [day in Day]?: Workout;
};
