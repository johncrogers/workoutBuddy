import {
  generateWorkoutPlan,
  WorkoutPlan,
} from "../../helpers/generateWorkoutPlan";
import movements from "../movements/movements";
import { FiveThreeOne } from "./FiveThreeOne/FiveThreeOne";

export const plans: WorkoutPlan[] = [
  generateWorkoutPlan(FiveThreeOne, {
    monday: movements.filter(({ focus }) => focus === "upper"),
    wednesday: movements.filter(({ focus }) => focus === "lower"),
    friday: movements.filter(({ focus }) => focus === "core"),
  }),
];
