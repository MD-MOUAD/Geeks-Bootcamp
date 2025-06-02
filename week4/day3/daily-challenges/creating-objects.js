class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of "${this.title}"!`
    );
  }
}

const video1 = new Video("Backend roadmap", "Mouad", 600);
video1.watch();

const video2 = new Video("Javascript tutorial", "Mark", 1800);
video2.watch();

// Bonus: Use an array to store data for five video instances
const videosData = [
  { title: "React Basics", uploader: "Charlie", time: 600 },
  { title: "Node.js Crash Course", uploader: "Dana", time: 1200 },
  { title: "CSS Grid Layout", uploader: "Eli", time: 480 },
  { title: "Async JS Explained", uploader: "Fay", time: 900 },
  { title: "Frontend Interview Tips", uploader: "George", time: 720 },
];

// Bonus: Loop through the array to instantiate those instances
videosData.forEach((video) => {
  const vid = new Video(video.title, video.uploader, video.time);
  vid.watch();
});
