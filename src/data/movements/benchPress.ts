import { barbell } from "../equipment/barbell";
import { Movement } from "../../types/Movement";

export const benchPress: Movement = {
  name: "benchPress",
  max: 145,
  focus: "upper",
  equipmentId: barbell.id,
};
