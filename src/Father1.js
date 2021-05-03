import React from "react";
export default function Father1(params) {
  return (
    <div style={{ width: 100, height: 100, backgroundColor: "pink" }}>
      {params.children}
    </div>
  );
}
