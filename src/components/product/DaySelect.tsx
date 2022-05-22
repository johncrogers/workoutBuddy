import React, { useState } from "react";

import { Day } from "../../types/Day";
import { Select } from "../common/Select";

export function DaySelect() {
  const [selectedDay, setSelectedDay] = useState<Day>("monday");
  const labelText = "Select";

  return (
    <Select
      name="daySelect"
      labelText={labelText}
      onChangeSelect={() => {}}
      selectOptions={[]}
    />
  );
}
