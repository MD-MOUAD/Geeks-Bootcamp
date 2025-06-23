import logo from "./logo.svg";
import "./Exercise3.css";

function Exercise3() {
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1 style={style_header}>
        This is a Header
      </h1>

      <p className="para">This is a Paragraph</p>

      <a href="https://reactjs.org" style={{ color: "purple" }}>
        This is a Link
      </a>

      <div style={{ marginTop: "30px" }}>
        <h3>
          <strong>This is a Form:</strong>
        </h3>
        <label>
          Enter your name:
          <input type="text" style={{ margin: "10px" }} />
        </label>
        <button type="submit">Submit</button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>
          <strong>Here is an Image:</strong>
        </h3>
        <img src={logo} alt="React Logo" style={{ width: "400px" }} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>
          <strong>This is a List:</strong>
        </h3>
        <ul style={{ display: "inline-block", textAlign: "left" }}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </div>
  );
}

export default Exercise3;
