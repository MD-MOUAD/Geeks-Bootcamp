import { useState } from "react";

function Garage({ size }) {
  return <p>Who lives in my {size} Garage?</p>;
}

function Car({ carInfo }) {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h2>
        This car is {color} {carInfo.model}
      </h2>
      <Garage size="small" />
    </div>
  );
}

export default Car;
