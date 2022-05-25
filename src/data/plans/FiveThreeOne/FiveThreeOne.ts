import { Plan } from "../../../types/Plan";
import { highIntensity } from "./highIntensity";
import { deload } from "./deload";
import { lowIntensity } from "./lowIntensity";
import { mediumIntensity } from "./mediumIntensity";

export const FiveThreeOne: Plan = [
  {
    name: "Low",
    sets: lowIntensity,
  },
  {
    name: "Medium",
    sets: mediumIntensity,
  },
  {
    name: "High",
    sets: highIntensity,
  },
  {
    name: "Deload",
    sets: deload,
  },
];
