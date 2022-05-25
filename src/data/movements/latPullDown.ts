import { Movement } from "../../types/Movement";
import { latTower } from "../equipment/latTower";

export const latPullDown: Movement = {
  name: "latPullDown",
  max: 120,
  focus: "upper",
  equipmentId: latTower.id,
};
