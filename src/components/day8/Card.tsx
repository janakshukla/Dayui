import cn from "classnames";

const Card = ({
  children,
  className,
  style
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "border border-white/20 rounded-2xl  transition-transform duration-300 ease-in-out",
        className

      )}
      style={style}
    >
      {children}
    </div>
  );
};

const CardHeader = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full flex  justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardFooter = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
    className={cn(
      "w-full flex  justify-between",
      className
    )}
  >
    {children}
  </div>
  );
};

export { Card, CardHeader, CardFooter };
