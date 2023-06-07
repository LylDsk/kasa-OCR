import background from "../assets/about-banner.png";
import "../styles/Aboutimg.css";

function abtimg() {
  return (
    <div className="about-imgdiv">
      <img src={background} alt="Paysage montagneux" className="about-img" />
    </div>
  );
}

export default abtimg;
