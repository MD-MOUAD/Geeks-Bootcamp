import { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`You pressed Enter with input: ${e.target.value}`);
    }
  };

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press Enter..."
      />
      <button onClick={toggleButton}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Events;
