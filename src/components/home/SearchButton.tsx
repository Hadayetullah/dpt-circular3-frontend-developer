import React from "react";

type Props = {};

const SearchButton = (props: Props) => {
  return (
    <button className="text-center border rounded-md py-1.5 px-5 text-xs uppercase font-semibold text-white bg-tertiary-bg">
      Search
    </button>
  );
};

export default SearchButton;
