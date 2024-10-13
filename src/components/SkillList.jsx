import React from "react";
import Skill from "./Skill";

function SkillList() {
  return (
    <div className="flex flex-wrap mt-5 gap-4 list-nonex">
      <Skill name="HTML" emojy="👍" color="blue" />
      <Skill name="css" emojy="✔" color="orange" />
      <Skill name="javascript" emojy="🤳" color="red" />
      <Skill name="react" emojy="💖" color="green" />
    </div>
  );
}

export default SkillList;
