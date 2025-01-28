import React from "react";
import Child2 from "./Props-drilling/Child2";

export default function Props({ data }) {
  return (
    <div>
      <h1>
        Hello ! Am {data.name},and my contact is{data.num},U can also connect
        through{data.email}
      </h1>
    </div>
  );
}
