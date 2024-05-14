import React from "react";
import SearchButton from "../../../../components/home/SearchButton";

type Props = {};

const BottomContents = (props: Props) => {
  return (
    <div className="bg-white h-auto py-4 md:py-auto md:h-[60px] w-full border-b-2 border-primary-border flex flex-col md:flex-row gap-6 justify-between items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="extraOption"
          name="extraOption"
          value="false"
          className="h-[18px] w-[18px] mr-2 mt-0 md:mt-1"
        />
        <label
          htmlFor="extraOption"
          className="text-xs md:text-lg font-semibold"
        >
          {" "}
          Extra Options
        </label>
      </div>

      <div className="relative flex items-center justify-center text-xs md:text-lg font-semibold">
        <label className="relative flex items-center justify-between gap-2 md:gap-5">
          Environment
          <div className="checkmarkedContainer">
            <input type="radio" checked={true} name="radio" />
            <span className="checkmarked"></span>
          </div>
        </label>
        <label className="relative flex items-center justify-center gap-1 md:gap-5 ml-8 md:ml-11">
          Dummy
          <div className="checkmarkedContainer">
            <input type="radio" name="radio" />
            <span className="checkmarked"></span>
          </div>
        </label>

        <label className="ml-8 md:ml-11">PDT</label>
      </div>

      <SearchButton />
    </div>
  );
};

export default BottomContents;
