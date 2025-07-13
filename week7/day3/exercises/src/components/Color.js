import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
  }

  // PART I — shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log("in shouldComponentUpdate");
    return true; // change to false to test blocking updates
  }

  // PART II — componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log("after update");
  }

  // PART III — getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  // Simulate useEffect with alert (called after render)
  componentDidMount() {
    alert("useEffect reached");

    // Timer to change color to yellow after 1 second
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  // Function to manually change color
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to Blue</button>
      </div>
    );
  }
}

export default Color;
