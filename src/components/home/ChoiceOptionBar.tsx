
type Props = { label: string; active: string, onClick: ()=> void  };

const ChoiceOptionBar = (props: Props) => {
  return (
    <div 
    onClick={props.onClick}
    className={`cursor-pointer border border-red w-full flex items-center justify-center text-center border rounded-sm border-secondary-border ${props.active === props.label ? "bg-tertiary-bg text-white" : "bg-white text-primary-text"}`}>
      <span className="font-semibold">{props.label}</span>
    </div>
  );
};

export default ChoiceOptionBar;
