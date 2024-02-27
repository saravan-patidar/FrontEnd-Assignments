import { IoCall, IoEarthOutline, IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <IoCall className="icon" />
        <p>Toll Free 1800 200 1234</p>
      </div>
      <div>
        <IoLogoFacebook className="icon" />
        <p>www.facebook.com/cripumps</p>
      </div>
      <div>
        <IoEarthOutline className="icon" />
        <p>www.crigroups.com</p>
      </div>
    </div>
  );
};
export default Footer;
