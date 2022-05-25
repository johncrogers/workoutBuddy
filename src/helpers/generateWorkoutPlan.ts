import { Day } from "../types/Day";
import { ExerciseCycles } from "../types/ExerciseCycles";
import { MovementsByDay } from "../types/MovementsByDay";
import { Plan } from "../types/Plan";

export type WorkoutPlan = {
  name: string;
  cyclesByDay: { [day in Day]: ExerciseCycles };
}[];

export function generateWorkoutPlan(
  plan: Plan,
  movementsByDay: MovementsByDay,
): WorkoutPlan {
  return plan.reduce((workoutPlan: WorkoutPlan, section) => {
    const { sets } = section;

    // Build new week
    const week: { [day in Day]: ExerciseCycles } = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    };
    const daysWithMovements: (keyof typeof movementsByDay)[] = Object.keys(
      movementsByDay,
    ) as (keyof typeof movementsByDay)[];
    daysWithMovements.forEach((day) => {
      sets.forEach(({ duration, volume, multiplier }) => {
        movementsByDay[day]?.forEach(({ name, max, focus, equipmentId }) => {
          week[day].push({
            duration,
            volume,
            multiplier,
            max,
            name,
            focus,
            equipmentId,
          });
        });
      });
    });

    // Include in plan
    workoutPlan.push({
      name: section.name,
      cyclesByDay: week,
    });
    return workoutPlan;
  }, []);
}
