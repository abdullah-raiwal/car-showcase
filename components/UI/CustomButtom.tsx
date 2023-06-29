import { CustomButtonProps } from "@/types";
const CustomButtom = ({
  title,
  disabled,
  handleClick,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        className={`btn rounded-full ${containerStyles}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButtom;
