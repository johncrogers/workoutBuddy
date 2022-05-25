import { Movement } from "../../types/Movement";
import { legMachine } from "../equipment/legMachine";

export const legCurl: Movement = {
  name: "legCurl",
  max: 100,
  focus: "lower",
  equipmentId: legMachine.id,
};
