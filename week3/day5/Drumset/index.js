const drums = [
  { key: "A", name: "Boom", sound: "sounds/boom.wav" },
  { key: "S", name: "Clap", sound: "sounds/clap.wav" },
  { key: "D", name: "HiHat", sound: "sounds/hihat.wav" },
  { key: "F", name: "Kick", sound: "sounds/kick.wav" },
  { key: "G", name: "OpenHat", sound: "sounds/openhat.wav" },
  { key: "H", name: "Ride", sound: "sounds/ride.wav" },
  { key: "J", name: "Snare", sound: "sounds/snare.wav" },
  { key: "K", name: "Tink", sound: "sounds/tink.wav" },
  { key: "L", name: "Tom", sound: "sounds/tom.wav" },
];

const container = document.getElementById("drums-container");

drums.forEach(({ key, name, sound }) => {
  const button = document.createElement("button");
  const keyLabel = document.createElement("span");
  const soundName = document.createElement("span");

  keyLabel.innerText = key;
  soundName.innerText = name;
  keyLabel.classList.add("key-label");
  soundName.classList.add("sound-name");

  button.appendChild(keyLabel);
  button.appendChild(soundName);
  button.classList.add("drum");
  button.setAttribute("data-key", key);

  container.appendChild(button);

  const audio = document.createElement("audio");
  audio.id = key;
  audio.src = sound;
  document.body.appendChild(audio);
});

const playSound = (key) => {
  const audio = document.getElementById(key.toUpperCase());
  const button = document.querySelector(
    `button[data-key="${key.toUpperCase()}"]`
  );
  if (audio && button) {
    audio.currentTime = 0;
    audio.play();
    button.classList.add("playing");

    setTimeout(() => {
      button.classList.remove("playing");
    }, 150);
  }
};

// Mouse click
document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", function (e) {
    const key = this.getAttribute("data-key");
    playSound(key);
  });
});

// Keyboard click
document.addEventListener("keydown", function (e) {
  playSound(e.key);
});
