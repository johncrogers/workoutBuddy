import { movements } from ".";

export const core = movements.filter(({ focus }) => focus === "core");
