import { Movement } from "../../types/Movement";
import { pin } from "../equipment/pin";

export const seatedRow: Movement = {
  name: "seatedRow",
  max: 150,
  focus: "upper",
  equipmentId: pin.id,
};
