import { Plan } from "../../../types/Plan";
import { highIntensity } from "./highIntensity";
import { deload } from "./deload";
import { lowIntensity } from "./lowIntensity";
import { mediumIntensity } from "./mediumIntensity";

export const FiveThreeOne: Plan = [
  {
    name: "Low Intensity",
    sets: lowIntensity,
  },
  {
    name: "Medium Intensity",
    sets: mediumIntensity,
  },
  {
    name: "High Intensity",
    sets: highIntensity,
  },
  {
    name: "Deload",
    sets: deload,
  },
];
