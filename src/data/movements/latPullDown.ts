import { Movement } from "../../types/Movement";
import { pin } from "../equipment/pin";

export const latPullDown: Movement = {
  name: "latPullDown",
  max: 120,
  focus: "upper",
  equipmentId: pin.id,
};
