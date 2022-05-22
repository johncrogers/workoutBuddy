import {
  generateWorkoutPlan,
  WorkoutPlan,
} from "../../helpers/generateWorkoutPlan";
import { core } from "../movements/core";
import { lower } from "../movements/lower";
import { upper } from "../movements/upper";
import { FiveThreeOne } from "./FiveThreeOne/FiveThreeOne";

export const plans: WorkoutPlan[] = [
  generateWorkoutPlan(FiveThreeOne, {
    monday: upper,
    wednesday: lower,
    friday: core,
  }),
];
