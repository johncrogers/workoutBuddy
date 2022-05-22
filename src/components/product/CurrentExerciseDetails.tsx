import React from "react";

export const CurrentExerciseDetails: React.FC<CurrentExerciseDetailsProps> = ({
  name,
  max,
  multiplier,
}: CurrentExerciseDetailsProps) => {
  const liftWeight = max * (multiplier / 100);

  return (
    <div>
      <div>{name}</div>
      <div>{liftWeight}</div>
    </div>
  );
};

type CurrentExerciseDetailsProps = {
  name: string;
  max: number;
  focus: string;
  multiplier: number;
  volume: number;
  duration: number;
};
