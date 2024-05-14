type Props = { type: string; value: string };

const DropdownInput = (props: Props) => {
  return (
    <div className="">
      <input
        type={props.type}
        value={props.value}
        className={`w-full h-full p-1 md:p-1.5 text-secondary-text text-xs md:text-base font-semibold outline-0`}
      />
    </div>
  );
};

export default DropdownInput;
