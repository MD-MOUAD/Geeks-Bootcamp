import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <Carousel
          showArrows={true}
          showThumbs={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
          thumbWidth={80}
          dynamicHeight={false}
        >
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
              alt="Hong Kong"
            />
            <p className="legend">Hong Kong</p>
          </div>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
              alt="Macao"
            />
            <p className="legend">Macao</p>
          </div>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
              alt="Japan"
            />
            <p className="legend">Japan</p>
          </div>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
              alt="Las Vegas"
            />
            <p className="legend">Las Vegas</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
