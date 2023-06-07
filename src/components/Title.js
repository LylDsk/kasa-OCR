import background from "../assets/TitleBack.png";
import "../styles/Title.css";
import "../styles/Bootstrap.css";

function Title() {
  return (
    <div className=" kasa-title">
      <h2 className="kasa-titletxt">Chez vous, partout et ailleurs</h2>
      <img
        src={background}
        alt="Falaises en bord de mer"
        className="kasa-background"
      />
    </div>
  );
}

export default Title;
