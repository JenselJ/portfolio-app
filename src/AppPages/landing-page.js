import "./landing-page.css";
import profile from "./../user-regular.svg";
import circle from "./../circle-solid.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import QuizApp from "./quiz-app";

function LandingPage() {
  const [nav, setNav] = useState("");
  const [uselessState, setUselessState] = useState("");

  let location = useLocation();
  let navigate = useNavigate();

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Sunny_Samanta_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Sunny_Samanta_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="body-div text-white">
        <div className="h-12 items-center bg-zinc-600 grid grid-cols-1 sticky top-0 nav-div">
          <div className="text-amber-100 max-w-sm mx-auto items-center flex flex-row space-x-4 place-self-center">
            <div className={nav === "home" ? "text-emerald-400" : ""}>
              <div className="hover:text-emerald-400 hover:cursor-pointer">
                <a href="#home-div">Home</a>
              </div>
            </div>
            <div className={nav === "web" ? "text-emerald-400" : ""}>
              <div className="hover:text-emerald-400 hover:cursor-pointer">
                <a href="#projects">Projects</a>
              </div>
            </div>
            {/* <div className={nav === "about" ? "text-emerald-400" : ""}>
              <div className="hover:text-emerald-400 hover:cursor-pointer">
                <a href="#about">About</a>
              </div>
            </div> */}

            <div
              className="hover:text-emerald-400 hover:cursor-pointer"
              onClick={onButtonClick}
            >
              Resume
            </div>
          </div>
        </div>

        <div className="home-div" id="home-div">
          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <div
                className="grid w-screen place-items-center text-5xl sm:text-8xl uppercase name mb-12 text-center"
                isVisible={isVisible ? setNav("home") : setUselessState("")}
              >
                Sunny Samanta
              </div>
            )}
          </TrackVisibility>
          <div className="grid grid-cols-1 place-items-center gap-8">
            <h6 className="text-2xl text-center sm:text-3xl">
              The odyssey of a web developer
            </h6>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="w-24 flex justify-center">
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <div className="profile my-12 rounded-lg shadow-lg"></div>
                  </div>
                </div>
              )}
            </TrackVisibility>

            <div className="flavour-text text-xl text-center px-2">
              For many moons, I have peered into the vastness of <br></br>space
              and learned the forbidden languages that allow me to fathom and
              conjure new galaxies in the <br></br>grand cosmos of the web.
            </div>
            <div className="flavour-text text-xl text-center px-2">
              While the immensity of the abyss may sometimes <br></br>seem
              intimidating, it is my fervent desire to learn and discover its
              secrets.
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 w-screen place-items-center gap-8"
          id="projects"
        >
          <div className="text-4xl uppercase">Projects</div>
          <div className="text-4xl">_________________</div>
          <div className="mb-20 mt-4 text-center px-2">
            Work I've done that resides out there, somewhere in the vast virtual
            space of the internet.
          </div>
          <div className="grid grid-cols-1 items-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className="flex flex-row gap-4 items-center mx-auto mb-20 grid grid-cols-2 sm:grid-cols-4"
                  isVisible={isVisible ? setNav("web") : setUselessState("")}
                >
                  <div className="overlay">
                    <div
                      className="hover:cursor-pointer quiz dot"
                      onClick={() => {
                        navigate("/quiz-app");
                      }}
                    ></div>
                  </div>
                  <div
                    className="w-40 hover:cursor-pointer job-div dot"
                    onClick={() => {
                      navigate("/job-app");
                    }}
                  >
                    {/* <svg
                      className="job"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 96C256 42.98 298.1 0 352 0H390.4C439.9 0 480 40.12 480 89.6V376C480 451.1 419.1 512 344 512C268.9 512 208 451.1 208 376V296C208 273.9 190.1 256 168 256C145.9 256 128 273.9 128 296V464C128 490.5 106.5 512 80 512C53.49 512 32 490.5 32 464V296C32 220.9 92.89 160 168 160C243.1 160 304 220.9 304 296V376C304 398.1 321.9 416 344 416C366.1 416 384 398.1 384 376V192H352C298.1 192 256 149 256 96zM376 64C362.7 64 352 74.75 352 88C352 101.3 362.7 112 376 112C389.3 112 400 101.3 400 88C400 74.75 389.3 64 376 64z" />
                    </svg> */}
                  </div>
                  <div
                    className="w-40 hover:cursor-pointer game dot"
                    onClick={() => {
                      navigate("/game-app");
                    }}
                  ></div>
                  <div
                    className="w-40 hover:cursor-pointer css dot"
                    onClick={() => {
                      navigate("/css-app");
                    }}
                  ></div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>

        <div>
          <div
            className="grid grid-cols-1 w-screen place-items-center mt-40 address mb-8"
            id="about"
          >
            {/* <div className="text-teal-300 address">sunny@sunnysamanta.com</div> */}
          </div>
          <div className="grid grid-cols-1 items-center">
            <div className="flex flex-row space-x-4 items-center mx-auto mb-8">
              <a
                href="https://www.linkedin.com/in/saneer-sunny-samanta-72b7ab240/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 dot-2 hover:cursor-pointer"></div>
              </a>
              <a
                href="https://github.com/JenselJ?tab=overview&from=2022-12-01&to=2022-12-08/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 dot-3 hover:cursor-pointer"></div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 w-screen place-items-center mb-16">
            <div className="text-sm text-gray-400 sign-off">
              @2022 Sunny Samanta
            </div>
          </div>
          <div className="grid grid-cols-1 items-center">
            <div className="flex flex-row space-x-4 items-center mx-auto mb-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
