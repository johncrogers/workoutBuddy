import { Plate } from "./Plate";

export type RequiredPlateCountByWeight = {
  [plateWeight in Plate["id"]]?: number;
};
