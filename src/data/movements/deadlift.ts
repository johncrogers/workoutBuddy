import { barbell } from "../equipment/barbell";
import { Movement } from "../../types/Movement";

export const deadlift: Movement = {
  name: "deadlift",
  max: 225,
  focus: "core",
  equipmentId: barbell.id,
};
