import { Customizable } from "@ui/types/text";

interface TextProps extends Customizable {
  children: React.ReactNode;
}

export const Title = ({ children, className, style }: TextProps) => {
  return (
    <h1 className={`text-5xl font-[1000] ${className}`} style={style}>
      {children}
    </h1>
  );
};

export const Subtitle = ({ children, className, style }: TextProps) => {
  return (
    <h2 className={`text-lg font-[1000] ${className}`} style={style}>
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className, style }: TextProps) => {
  return (
    <p className={`text-lg ${className}`} style={style}>
      {children}
    </p>
  );
};
