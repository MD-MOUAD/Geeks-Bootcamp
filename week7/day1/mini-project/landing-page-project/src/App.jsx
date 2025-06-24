import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import Contact from "./components/Contact";
import {
  faBuilding,
  faGlobeAmericas,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <InfoCard icon={faBuilding} title="About the Company">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </InfoCard>

        <InfoCard grey icon={faGlobeAmericas} title="Our Values">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </InfoCard>

        <InfoCard icon={faLandmark} title="Our Mission">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </InfoCard>

        <Contact />
      </main>
    </>
  );
}
