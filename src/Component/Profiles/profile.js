import React, { useState } from "react";
import "./profile.css";
import { Link } from "react-scroll";
import Tony from "../../assets/tony.jpg";
import Captin from "../../assets/captin.jpg";
import Scarlett from "../../assets/scarlett.jpg";
import Thor from "../../assets/thor.jpg";

const Profiles = () => {
  const [setShowMenu] = useState(false);
  return (
    <section id="profile">
      <span className="ProfileTitle">Marvellous Prolies </span>
      <span className="profileDesc"> Profiles </span>
      <div className="prolieBars">
        <div className="profileBar">
          <img src={Tony} alt="Tony" className="profileBarImg" />
          <div className="profleBarText">
            <h2>Tony Strak</h2>
            <p>
              I am a skilled Recat Devloper inclued skills in Java, MySQL,
              Mongodb.
            </p>

            <button
              className="desktopMenuBtn"
              onClick={() => {
                document
                  .getElementById("Person1Page")
                  .scrollIntoView({ behaviour: "smooth" });
              }}
            >
              Summary
            </button>
            <Link
              activeClass="active"
              to="person1"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            ></Link>
          </div>
        </div>
        <div className="profileBar">
          <img src={Captin} alt="Captin" className="profileBarImg" />
          <div className="profileBarText">
            <h2>Chris Evans</h2>
            <p>
              I am a experiend and skilled in Android Development with skills
              including Android, MySQL , Java, Web Designing..
            </p>
            <button
              className="desktopMenuBtn"
              onClick={() => {
                document
                  .getElementById("Person2Page")
                  .scrollIntoView({ behaviour: "smooth" });
              }}
            >
              Summary
            </button>
            <Link
              activeClass="active"
              to="person2"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            ></Link>
          </div>
        </div>
        <div className="profileBar">
          <img src={Scarlett} alt="Scarlett" className="profileBarImg" />
          <div className="profileBarText">
            <h2> Scarlett Johansson</h2>
            <p>
              I am a experiend and skilled in Android Development with skills
              including Android, MySQL , Java, Web Designing..
            </p>
            <button
              className="desktopMenuBtn"
              onClick={() => {
                document
                  .getElementById("Person3Page")
                  .scrollIntoView({ behaviour: "smooth" });
              }}
            >
              Summary
            </button>
            <Link
              activeClass="active"
              to="person3"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            ></Link>
          </div>
        </div>
        <div className="profileBar">
          <img src={Thor} alt="Thor" className="profileBarImg" />
          <div className="profileBarText">
            <h2> Christopher Hemsworth</h2>
            <p>
              I am a skilled Recat Devloper inclued skills in Java, MySQL,
              Mongodb.
            </p>
            <button
              className="desktopMenuBtn"
              onClick={() => {
                document
                  .getElementById("Person4Page")
                  .scrollIntoView({ behaviour: "smooth" });
              }}
            >
              Summary
            </button>
            <Link
              activeClass="active"
              to="person4"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            ></Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profiles;
