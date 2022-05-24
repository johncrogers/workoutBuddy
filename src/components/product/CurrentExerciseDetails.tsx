import React from "react";
import { Button, Table } from "reactstrap";
import { equipment } from "../../data/equipment/equipment";
import { calculateRequiredPlateCountByWeight } from "../../helpers/calculateRequiredPlates";
import { Equipment } from "../../types/Equipment";
import { Exercise } from "../../types/Exercise";
import { RequiredPlateCountByWeight } from "../../types/RequiredPlateCountByWeight";

export const CurrentExerciseDetails: React.FC<CurrentExerciseDetailsProps> = (
  props: CurrentExerciseDetailsProps,
) => {
  const {
    name,
    max,
    multiplier,
    volume,
    equipmentId,
    className,
    handleNextExerciseClick,
  } = props;
  const liftWeight = max * (multiplier / 100);
  const requiredEquipment: Equipment | undefined = equipment.find(
    ({ id }) => equipmentId === id,
  );
  const exerciseWillRequirePlates =
    !!requiredEquipment && liftWeight > requiredEquipment?.weight;
  const sleeveUnitWeight =
    !!requiredEquipment && exerciseWillRequirePlates
      ? (liftWeight - requiredEquipment.weight) /
        requiredEquipment.plateSleeveCount
      : 0;
  const requiredPlateCountByWeight: RequiredPlateCountByWeight =
    exerciseWillRequirePlates
      ? calculateRequiredPlateCountByWeight(sleeveUnitWeight, "pounds")
      : {};
  const requiredPlates = Object.keys(
    requiredPlateCountByWeight,
  ) as unknown as (keyof typeof requiredPlateCountByWeight)[];

  // console.group("CurrentExerciseDetails");
  // // console.group("requiredPlateCountByWeight:", requiredPlateCountByWeight);
  // // console.table(requiredPlateCountByWeight);
  // // console.groupEnd();
  // // console.group("requiredPlates:", requiredPlates);
  // // console.table(requiredPlates);
  // // console.groupEnd();
  // // console.group("requiredEquipment:", requiredEquipment);
  // // console.table(requiredEquipment);
  // // console.groupEnd();
  // // console.log("sleeveUnitWeight", sleeveUnitWeight);
  // console.groupEnd();

  return (
    <div className={className}>
      <h1>{name}</h1>
      <h2>{`${volume} reps @ ${liftWeight} lbs`}</h2>
      <Button color="primary" onClick={handleNextExerciseClick}>
        Next
      </Button>
      {requiredPlates.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>Plate</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {requiredPlates
              .sort((a, b) => b - a)
              .map((plate) => {
                return (
                  <tr>
                    <th scope="row">{plate}</th>
                    <td>{requiredPlateCountByWeight[plate]}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

type CurrentExerciseDetailsProps = Exercise & {
  className?: string;
  handleNextExerciseClick: () => void;
};
