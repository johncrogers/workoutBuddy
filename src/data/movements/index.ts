import { Movement } from "../../types/Movement";

import { benchPress } from "./benchPress";
import { deadlift } from "./deadlift";
import { burpee } from "./burpee";
import { latPullDown } from "./latPullDown";
import { legCurl } from "./legCurl";
import { legExtension } from "./legExtension";
import { lunge } from "./lunge";
import { seatedRow } from "./seatedRow";
import { shoulderPress } from "./shoulderPress";
import { squat } from "./squat";
import { turkishGetup } from "./turkishGetup";

export const movements: Movement[] = [
  deadlift,
  turkishGetup,
  burpee,
  squat,
  lunge,
  legExtension,
  legCurl,
  shoulderPress,
  benchPress,
  latPullDown,
  seatedRow,
];
