import { RequiredPlateCountByWeight } from "../types/RequiredPlateCountByWeight";
import { Plate } from "../types/Plate";
import { plateOptions } from "../data/plateOptions/plateOptions";

export const calculateRequiredPlateCountByWeight = (
  targetWeight: number,
  targetWeightUnit: Plate["unit"],
): RequiredPlateCountByWeight => {
  switch (targetWeightUnit) {
    case "kilos":
      return {};
    case "pounds":
      let weightAdded: number = 0;
      return plateOptions
        .sort((a, b) => b.weight - a.weight)
        .reduce((requiredPlates: RequiredPlateCountByWeight, { weight }) => {
          const maximumCount: number = Math.floor(
            (targetWeight - weightAdded) / weight,
          );
          // console.group("calculateRequiredPlateCountByWeight");
          // // console.group('thing:', thing);
          // // console.table(thing);
          // // console.groupEnd();
          // console.log("maximumCount", maximumCount);
          // console.log("maximumCount * weight", maximumCount * weight);
          // console.groupEnd();

          if (maximumCount > 0) {
            requiredPlates[weight] = maximumCount;
            weightAdded += maximumCount * weight;
          }

          return requiredPlates;
        }, {});

    default:
      return {};
  }
};
