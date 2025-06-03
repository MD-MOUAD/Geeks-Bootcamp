class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    // This logs first when a new Flamingo is created
    console.log("I'm pink. 🌸");

    // Calling the parent class (Bird) constructor will logs I'm a bird. 🦢
    super();
  }
}

const pet = new Flamingo();
// I'm pink. 🌸
// I'm a bird. 🦢
