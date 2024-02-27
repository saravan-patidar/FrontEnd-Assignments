import Img3 from "../assests/3.png";

const MainSection = () => {
  return (
    <div className="main-section">
      <p className="heading">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="img_box">
        <img src={Img3} alt="img-3" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
    </div>
  );
};
export default MainSection;
