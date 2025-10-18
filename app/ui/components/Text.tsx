export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  );
};

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-lg font-[1000] text-gray-800 dark:text-gray-200">
      {children}
    </h2>
  );
};

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-lg text-gray-700 dark:text-gray-300">{children}</p>;
};
