import React from "react";
export default function Father2(params) {
  return (
    <div style={{ width: 100, height: 100, backgroundColor: "gray" }}>
      {params.children}
    </div>
  );
}
