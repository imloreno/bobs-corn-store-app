import React from "react";

const FEATURE_DATA = [
  { label: "Happy customers", value: "25,000" },
  { label: "Followers", value: "5,678" },
  { label: "Happy customers", value: "95%" },
];

const Feature = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-highlight">
        {value}
      </h2>
      <p className="font-extrabold text-xs md:text-sm lg:text-lg -mt-1">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="flex gap-9 mt-12 justify-center bg-box py-5">
      {FEATURE_DATA.map((feature, index) => (
        <Feature
          key={feature.label + index}
          label={feature.label}
          value={feature.value}
        />
      ))}
    </div>
  );
};

export default Stats;
