import React, { useState } from "react";
import ChoiceOptionBar from "../../../components/home/ChoiceOptionBar";

type Props = {};

const CustomForm = (props: Props) => {
  const [active, setActive] = useState("One Way");
  return (
    <div className="max-w-[300px] mx-auto flex flex-row">
      <ChoiceOptionBar
        label="Round Trip"
        active={active}
        onClick={() => setActive("Round Trip")}
      />
      <ChoiceOptionBar
        label="One Way"
        active={active}
        onClick={() => setActive("One Way")}
      />
      <ChoiceOptionBar
        label="Multi City"
        active={active}
        onClick={() => setActive("Multi City")}
      />
    </div>
  );
};

export default CustomForm;
