import React from "react";

const Card = ({ title, number, smTitle }) => {
  return (
    <div
      className="bg-white text-black p-3 border rounded-lg relative"
      style={{ width: 600, height: 200 }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-2xl font-semibold">
            {title}
            {smTitle ? <span className="text-sm ms-1">{smTitle}</span> : ""}
          </h1>
          <img src="/plus.svg" />
        </div>
        <h6 className="text-5xl font-bold">{number}</h6>
      </div>
      <img src="/halfBlueEffect.svg" className="absolute left-1 bottom-0" />
    </div>
  );
};

export default Card;
