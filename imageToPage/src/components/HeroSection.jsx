import trophy from "../assests/1.png";
import Img2 from "../assests/2.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left-part">
        <img src={trophy} alt="img-1" className="trophy" />
      </div>
      <div className="right-part">
        <h3>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src={Img2} alt="img-2" className="award" />
        <p>
          Government of India has awarded the{" "}
          <span className="bolder">
            "National Energy Conservation Award 2018"
          </span>
          . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
