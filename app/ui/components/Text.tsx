import { Customizable } from "@ui/types/text";

interface TextProps extends Customizable {
  children: React.ReactNode;
}

export const Title = ({ children, className, style }: TextProps) => {
  return (
    <h1
      className={`text-5xl font-[1000] text-gray-900 dark:text-gray-100 ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
};

export const Subtitle = ({ children, className, style }: TextProps) => {
  return (
    <h2
      className={`text-lg font-[1000] text-gray-800 dark:text-gray-200 ${className}`}
      style={style}
    >
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className, style }: TextProps) => {
  return (
    <p
      className={`text-lg text-gray-700 dark:text-gray-300 ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};
