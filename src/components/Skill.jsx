import React from "react";

function Skill(props) {
  return (
    <div
      className="rounded-md px-2 py-1 items-center flex"
      style={{ backgroundColor: props.color }}
    >
      <span>{props.name}</span>
      <span>{props.emojy}</span>
    </div>
  );
}

export default Skill;
