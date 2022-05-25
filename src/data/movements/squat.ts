import { Movement } from "../../types/Movement";
import { barbell } from "../equipment/barbell";

export const squat: Movement = {
  name: "squat",
  max: 135,
  focus: "lower",
  equipmentId: barbell.id,
};
