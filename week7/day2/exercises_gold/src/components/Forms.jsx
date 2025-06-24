import { useState } from "react";

function Forms() {
  // Part I: Username state
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const [errormessage, setErrormessage] = useState("");
  const [textarea, setTextarea] = useState(
    "This is some content in a text area"
  );
  const [selectedCar, setSelectedCar] = useState("Volvo");

  // Part I: Handle username change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Part IV: Handle age change with validation
  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);

    // Part V: Age validation
    if (value && isNaN(value)) {
      setErrormessage("Age must be a number");
    } else {
      setErrormessage("");
    }
  };

  // Part III: Form submission handler
  const mySubmitHandler = (e) => {
    e.preventDefault();

    // Part V: Final validation before submission
    if (age && isNaN(age)) {
      alert("Please enter a valid age before submitting");
      return;
    }

    alert(`Hello ${username}, you are ${age} years old`);
  };

  // Part II: Conditional rendering
  let header;
  if (username || age) {
    header = (
      <h2>
        Hello {username || "User"} {age ? `, you are ${age} years old` : ""}
      </h2>
    );
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1>Form Exercise</h1>

      {/* Part II: Conditionally rendered header */}
      {header}

      {/* Part V: Error message display */}
      {errormessage && <div style={{ color: "red" }}>{errormessage}</div>}

      {/* Part III: Form with onSubmit */}
      <form onSubmit={mySubmitHandler}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={age || ""}
              onChange={handleAgeChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        {/* Part VI: Textarea */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Feedback:
            <textarea
              name="textarea"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
              style={{ marginLeft: "10px", width: "200px", height: "60px" }}
            />
          </label>
        </div>

        {/* Part VII: Select */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Select your car:
            <select
              name="cars"
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              style={{ marginLeft: "10px" }}
            >
              <option value="Volvo">Volvo</option>
              <option value="Ford">Ford</option>
              <option value="Toyota">Toyota</option>
              <option value="Tesla">Tesla</option>
            </select>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Part VII: Display selected car */}
      {selectedCar && <p>Your selected car is: {selectedCar}</p>}
    </div>
  );
}

export default Forms;
