import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Car = () => {
  const [color, setColor] = useState("red");
  const changeColor = () => {
    //here
    setColor("blue");
  };
  return (
    <div>
      <h1>My car is {color}</h1>
      <button
        className="border py-4 px-10 rounded-xl"
        type="button"
        onClick={changeColor}
      >
        {" "}
        Change color
      </button>
    </div>
  );
};

const Sunrise = () => {
  //2.
  const [city, setCity] = useState("London");
  const [lat, setLat] = useState(51.5074);
  const [lng, setLng] = useState(0.1278);
  const [hourSunrise, setHourSunrise] = useState("");

  const changeCity = (event) => {
    let cityName = event.target.name;
    if (cityName == "new york") {
      //2.
      setCity("New York");
      setLat(40.73061);
      setLng(-73.935242);
    } else if (cityName == "paris") {
      //2.
      setCity("Paris");
      setLat(48.864716);
      setLng(2.349014);
    }
  };

  //3.
  useEffect(() => {
    console.log("use effect run");
    let paragraph = document.getElementsByClassName("description")[0];

    fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng)
      .then((resp) => resp.json())
      .then(function (resp) {
        setHourSunrise(resp.results.sunrise);
        //**
        return resp.results.sunrise;
      })
      .then(function (result) {
        //**
        if (hourSunrise == result) {
          //change the text content of the paragraph
          //**
          paragraph.textContent = `The hour of the sunrise in ${city} is ${hourSunrise}`;
        }
      })
      .catch(function (error) {
        console.log(`We got the error ${error}`);
      });
  });

  return (
    <div>
      <div>
        <p className="description"></p>
        <button
          className="rounded-xl py-2 px-5 border mr-4"
          type="button"
          name="new york"
          onClick={changeCity}
        >
          {" "}
          Get the hour of the sunrise in New York
        </button>
        <button
          className="rounded-xl py-2 px-5 border"
          type="button"
          name="paris"
          onClick={changeCity}
        >
          {" "}
          Get the hour of the sunrise in Paris
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`use effect run! counter: ${counter}`);
  }, [counter]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-10">In the App.js </h1>
      {/* <Car /> */}
      {/* <Sunrise /> */}
      <div className="flex gap-3">
        <button
          className="rounded-xl py-2 px-5 border"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
        <span className="rounded-xl text-center px-2 py-2  border w-20 truncate">
          10000
        </span>

        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="rounded-xl py-2 px-5 border"
        >
          -
        </button>
      </div>
    </div>
  );
}
