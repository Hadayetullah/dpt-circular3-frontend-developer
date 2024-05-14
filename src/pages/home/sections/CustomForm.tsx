import BottomContents from "./customFormSections/BottomContents";
import MiddleInputFields from "./customFormSections/MiddleInputFields";
import TopChioceOptionBar from "./customFormSections/TopChioceOptionBar";

// type Props = {};

const CustomForm = () => {
  return (
    <>
      <TopChioceOptionBar />
      <MiddleInputFields />
      <BottomContents />
    </>
  );
};

export default CustomForm;
