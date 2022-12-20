import { useState, useEffect } from "react";
import circle from "./../circle-solid.svg";
import quiz1 from "./../quiz1.png";
import quiz2 from "./../quiz2.png";
import quiz3 from "./../quiz3.png";
import { useNavigate } from "react-router-dom";

function QuizApp() {
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
            href="https://quiz-app-tailwind-draft-1.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Quiz Club
          </a>
        </div>
        <div className="w-screen flex place-content-center">
          <div className="px-5 mt-10 grid lg:grid-cols-3 grid-cols-1 gap-2">
            <img style={{ width: "400px" }} src={quiz1}></img>
            <img style={{ width: "400px" }} src={quiz2}></img>
            <img style={{ width: "400px" }} src={quiz3}></img>
            <div></div>
          </div>
        </div>

        <div className="w-screen flex place-content-center">
          <div style={{ maxWidth: "400px" }} className="text-lg px-3">
            <div className="mt-10 uppercase font-semibold flex place-content-center">
              <div className="mr-4">React</div>{" "}
              <div className="mr-4">Firebase</div> <div>Tailwind</div>{" "}
            </div>
            <div className="mt-14">
              <a
                className="text-emerald-400 hover:cursor-pointer hover:underline"
                href="https://quiz-app-tailwind-draft-1.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Quiz Club
              </a>{" "}
              website is my attempt at an elevated version of the classic
              Javascript quiz. When users complete quizes, their results and
              data automatically saved on the back-end. This data is then
              presently cleanly on their Profile page so they can see their
              progress. React was used for the front-end with Tailwind for a
              modern and responsive website style. I used Firebase User
              Authentication and Realtime Database to create a userbase and
              store back-end data.
            </div>
            <div className="mt-8">
              In making this website I learnt how to manipulate data arrays and
              objects with more advanced Javascript to present data in a clear
              and useful way for users. I also learnt how to use Firebase to
              create a secure back-end and how to connect this to the front-end
              with HTTP Requests.
            </div>
            <div className="mt-8">
              You can use the user details below to browse my app or feel free
              to create your own account.
            </div>
            <div className="mt-8">User: james.clarke@gmail.com</div>
            <div className="mt-8">Password: james123</div>
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

export default QuizApp;
