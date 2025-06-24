import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        React Form Exercises
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <div>
          <h2 style={{ color: "#4CAF50" }}>
            Exercise 1: Basic Form with Data Display
          </h2>
          <Exercise1 />
        </div>

        <div>
          <h2 style={{ color: "#2196F3" }}>
            Exercise 2: User Input Display with Reset
          </h2>
          <Exercise2 />
        </div>
      </div>
    </div>
  );
}

export default App;
