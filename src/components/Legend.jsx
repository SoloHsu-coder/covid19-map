import React from "react";

export default function Legend({ legendItems }) {
  console.log(legendItems);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item) => (
        <div
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: item.textColor,
            height: "10vh",
            fontWeight: "bolder",
            fontSize: "1.5em",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
