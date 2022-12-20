import { useState, useEffect } from "react";
import circle from "./../circle-solid.svg";
import { useNavigate } from "react-router-dom";
import job1 from "./../job1.png";
import job2 from "./../job2.png";
import game1 from "./../game1.png";

function GameApp() {
  const [nav, setNav] = useState("");
  const [carousel, setCarousel] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="text-white" style={{ backgroundColor: "#211a4c" }}>
        <div className="w-screen flex">
          <div
            className="mx-auto text-2xl pt-4 hover:cursor-pointer hover:text-emerald-400"
            onClick={() => {
              navigate("/");
            }}
          >
            Sunny Samanta
          </div>
        </div>
        <div className="w-screen flex">
          <div className="mx-auto text-xl font-semibold">
            The Odyssey of a web developer
          </div>
        </div>

        <div className="w-screen text-center mt-24 text-5xl font-bold uppercase">
          <a
            className="hover:cursor-pointer hover:text-emerald-400"
            href="https://game-app-e3cd9.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Megaman vs Samus
          </a>{" "}
        </div>
        <div className="w-screen flex place-content-center">
          <div className="px-5 mt-10 grid grid-cols-1">
            <img style={{ width: "600px" }} src={game1}></img>
            <div></div>
          </div>
        </div>

        <div className="w-screen flex place-content-center">
          <div style={{ maxWidth: "400px" }} className="text-lg px-3">
            <div className="mt-10 uppercase font-semibold flex place-content-center">
              <div className="mr-4">React</div> <div className="mr-4">CSS</div>{" "}
              <div>Javascript</div>{" "}
            </div>
            <div className="mt-14">
              <a
                className="text-emerald-400 hover:cursor-pointer hover:underline"
                href="https://game-app-e3cd9.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Megaman vs Samus
              </a>{" "}
              is a simple turn-based combat game that I had a lot of fun making.
              Users play as Megaman an choose between three ability options to
              take down the AI opponent Samus. In this app I used React hooks to
              compute the AI opponent choices, create the batle sequence and
              configure narrator announcements.
            </div>
            <div className="mt-8">
              The styling is done with pure CSS and some basic CSS animation are
              used too. I also used some more complex Javascript syntax to build
              the battle sequence, such as an IIFE (immediately invoked function
              expression).
            </div>
            <div className="mt-8">
              No login is needed for this app. Good luck defeating Samus!{" "}
            </div>
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

export default GameApp;
