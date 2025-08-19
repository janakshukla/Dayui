

const Button = ({
    value,
    color
}: {
    value: string;
    color: string;
}) => {
  return (
    <button className={`${color} text-white px-12 py-2 rounded-xl shadow-[inset_0px_1px_2px_0_#FFFFFF]/17 drop-shadow-[inset_0px_12px_22px_0_#000000]/45`} >{value}</button>
  )
}

export default Button