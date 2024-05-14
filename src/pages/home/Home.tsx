
import CustomForm from "./sections/CustomForm";
import DataList from "./sections/DataList";

// type Props = {};

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <CustomForm />
      <DataList />
    </div>
  );
};

export default Home;
