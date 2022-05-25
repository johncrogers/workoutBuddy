import { Movement } from "../../types/Movement";
import { barbell } from "../equipment/barbell";

export const shoulderPress: Movement = {
  name: "shoulderPress",
  max: 65,
  focus: "upper",
  equipmentId: barbell.id,
};
