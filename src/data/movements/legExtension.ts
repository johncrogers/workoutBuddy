import { Movement } from "../../types/Movement";
import { legMachine } from "../equipment/legMachine";

export const legExtension: Movement = {
  name: "legExtension",
  max: 100,
  focus: "lower",
  equipmentId: legMachine.id,
};
