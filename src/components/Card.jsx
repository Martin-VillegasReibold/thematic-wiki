import React from "react";

const Card = ({ name, altNames, image }) => {
  return (
    <div className="bg-sand/60 w-full min-h-40 p-4 rounded-lg border-border overflow-hidden shadow-lg flex flex-row gap-4 hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
      <img src={image} alt={`${name} portrait`} className="w-16 h-16 object-cover rounded-xl border-2 border-border shrink-0" />
      <div className=" rounded-md border-border w-full">
        <h2 className="text-xl font-bold mb-2 justify-start">{name}</h2>
        <p className="text-sm text-ink/70 text-justify">{altNames}</p>
      </div>
    </div>
  );
};

export default Card;
