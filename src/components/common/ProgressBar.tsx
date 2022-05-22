import React from "react";

export const ProgressBar: React.FC<PropgressBarProps> = (
  props: PropgressBarProps,
) => {
  const { completed, remaining } = props;
  const total = completed + remaining;
  const completedPercentage = (completed / total) * 100;
  const remainingPercentage = (remaining / total) * 100;

  return (
    <div className="w-100 d-flex">
      <div style={{ width: `${completedPercentage}%` }} className="bg-success">
        {`${Math.round(completedPercentage)}%`}
      </div>
      {remaining > 0 && (
        <div
          style={{ width: `${remainingPercentage}%` }}
          className="bg-warning"
        >
          {`${Math.round(remainingPercentage)}%`}
        </div>
      )}
    </div>
  );
};
type PropgressBarProps = {
  completed: number;
  remaining: number;
};
