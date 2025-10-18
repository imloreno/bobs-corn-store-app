"use client";
import React, { useState } from "react";

const PixelPerfectTool = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleOpacity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpacity(Number(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 z-10 user-select-none pointer-events-none">
      <input
        type="checkbox"
        className="fixed top-0 left-0 pointer-events-auto"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <input
        type="range"
        className="fixed top-0 left-4 pointer-events-auto"
        value={opacity}
        onChange={handleOpacity}
        min={0}
        max={100}
        step={1}
      />
      {isChecked && (
        <img
          src="/temp/Home.png"
          className="w-[100vw] fixed top-0 left-0 pointer-events-none -z-10"
          style={{ opacity: opacity / 100 }}
        />
      )}
    </div>
  );
};

export default PixelPerfectTool;
