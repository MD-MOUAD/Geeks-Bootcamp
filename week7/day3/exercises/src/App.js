import React from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import Color from "./components/Color";

class Child extends React.Component {
  componentWillUnmount() {
    alert("Child component is unmounted!");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        {/* Exercise 1 */}
        <h1>
          Click on the numbers to increase the counters. The counter is
          programmed to throw error when it reaches 5. This simulates a
          JavaScript error in a component.
        </h1>
        <hr />
        <h2>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </h2>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <h2>
          These two counters are each inside of their own error boundary. So if
          one crashes, the other is not affected.
        </h2>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <h2>
          This counter is not inside of boundary. So if crashes, all other
          components are deleted.
        </h2>
        <BuggyCounter />

        {/* Exercise 2 */}
        <div style={{ marginTop: "40px" }}>
          <Color />
        </div>
        {/* Exercise 3 */}
        <div style={{ marginTop: "40px" }}>
          {this.state.show && <Child />}
          <button onClick={this.deleteChild}>Delete</button>
        </div>
      </div>
    );
  }
}

export default App;
