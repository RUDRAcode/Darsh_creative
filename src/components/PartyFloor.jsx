import React from "react";

const PartyFloorGrid = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF"];

  const rows = 50;
  const cols = 50;

  const gridItems = Array.from({ length: rows * cols }, (_, index) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() ;
    return { id: index, color, delay };
  });

  return (
    <div className="w-full h-full absolute grid grid-cols-24 grid-rows-36">
      {gridItems.map((item, index) =>
        index % 3 ? (
          <div
            key={item.id}
            className="w-full h-full animate-flash"
            style={{
              backgroundColor: item.color,
              animationDelay: "5s",
            }}
          />
        ) : (
          <div
            key={item.id}
            className="w-full h-full animate-flash"
            style={{
              backgroundColor: item.color,
              animationDelay: `${item.delay}s`,
            }}
          />
        )
      )}
    </div>
  );
};

export default PartyFloorGrid;
