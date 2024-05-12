import React from "react";
import CustomForm from "./sections/CustomForm";
import DataList from "./sections/DataList";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="max-w-[1300px] mx-auto py-3 md:py-6">
      <CustomForm />
      <DataList />
    </div>
  );
};

export default Home;
