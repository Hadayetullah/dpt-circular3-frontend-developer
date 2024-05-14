import DropdownInput from "../../../../components/home/DropdownInput";

// type Props = {};

const MiddleInputFields = () => {
  const chevronDown = (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-3 md:w-4 h-3 md:h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  return (
    <div className="bg-white md:h-[60px] w-full border-y-2 border-primary-border flex flex-col md:flex-row py-3 md:py-0 gap-2">
      <div className="w-100 md:w-[37%] mx-auto flex items-center gap-2">
        <div id="inputFieldParent" className="w-[30%] border-quinary-border">
          <DropdownInput type="text" value="LHR" />
        </div>
        <div id="inputFieldParent" className="w-[30%] border-quinary-border">
          <DropdownInput type="text" value="CDG" />
        </div>
        <div id="inputFieldParent" className="w-[40%] border-quinary-border">
          <DropdownInput type="date" value="2022-12-22" />
        </div>
      </div>
      <div className="w-100 md:w-[37%] mx-auto bg-white flex items-center gap-2">
        <div
          id="inputFieldParent"
          className="w-[27%] border-quinary-border flex items-center justify-between"
        >
          <div className="w-full">
            <DropdownInput type="text" value="Day -" />
          </div>

          <div className="pr-1">{chevronDown}</div>
        </div>
        <div
          id="inputFieldParent"
          className="w-[27%] border-quinary-border flex items-center justify-between"
        >
          <div className="w-full">
            <DropdownInput type="text" value="Day +" />
          </div>

          <div className="pr-1">{chevronDown}</div>
        </div>
        <div
          id="inputFieldParent"
          className="w-[46%] border-quinary-border flex items-center justify-between"
        >
          <div className="w-full">
            <DropdownInput type="text" value="Anytime" />
          </div>

          <div className="pr-1">{chevronDown}</div>
        </div>
      </div>
      <div className="w-100 md:w-[26%] mx-auto bg-white flex flex-col md:flex-row items-center gap-2">
        <div className="w-[10%] flex md:justify-end justify-center text-2xl md:text-3xl font-bold md:-mr-3 -mt-2">
          +
        </div>

        <div className="w-[90%] flex flex-row mx-auto items-center justify-center md:justify-end gap-2">
          <div
            id="inputFieldParent"
            className="w-[45%] border-quinary-border flex items-center justify-between"
          >
            <div className="w-full">
              <DropdownInput type="text" value="ADT" />
            </div>

            <div className="pr-1">{chevronDown}</div>
          </div>
          <div
            id="inputFieldParent"
            className="w-[45%] border-quinary-border flex items-center justify-between"
          >
            <div className="w-full">
              <DropdownInput type="text" value="1" />
            </div>

            <div className="pr-1">{chevronDown}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInputFields;
