import "./Header.css";
import logo from "../../img/title.png";
import logoClock from "../../img/clock.png";

export default function RuleInfo() {
  return (
    <header>
      <div className="title">
        <img src={logoClock} alt="clock" className="logo-clock" />
        <h1>
          <img src={logo} alt="title" className="logo-title" />
        </h1>
      </div>
    </header>
  );
}
