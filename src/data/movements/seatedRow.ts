import { Movement } from "../../types/Movement";
import { latTower } from "../equipment/latTower";

export const seatedRow: Movement = {
  name: "seatedRow",
  max: 150,
  focus: "upper",
  equipmentId: latTower.id,
};
