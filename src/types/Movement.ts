import { Equipment } from "./Equipment";

export type Movement = {
  name: string;
  max: number;
  focus: "core" | "upper" | "lower";
  equipmentId: Equipment["id"] | null;
};
