import { movements } from "../data/movements";

export const lower = movements.filter(({ focus }) => focus === "lower");
