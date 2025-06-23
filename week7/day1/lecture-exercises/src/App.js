import React from "react";

const Car = (props) => {
  return (
    <h2>
      Hi, I am a {props.carBrand} Car! My name is {props.name}
    </h2>
  );
};
function App() {
  const brand = "Ford";

  return (
    <div>
      <h1>In the App.js</h1>
      <Car carBrand={brand} name="Lightning McQueen" />;
    </div>
  );
}

export default App;
