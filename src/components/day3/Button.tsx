import type { LucideIcon } from "lucide-react";

const Button = ({
  value,
  color,
  icon:Icon,
}: {
  value: string;
  color: string;
  icon:LucideIcon
  ;
}) => {
  return (
    <button
      onClick={() => {
        window.location.href = "https://github.com/janakshukla";
      }}
      className={`${color} hover:scale-105 text-white scale-75 sm:scale-100 px-16 gap-1 items-center py-2  flex rounded-xl shadow-[inset_0px_1px_2px_0_#FFFFFF]/17 drop-shadow-[inset_0px_12px_22px_0_#000000]/45`}
    >
      <Icon size={16} />
      {value}
    </button>
  );
};

export default Button;
