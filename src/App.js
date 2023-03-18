import logo from "./logo.svg";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillPin } from "react-icons/ai";
import { FaPinterestSquare, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { useState } from "react";
import Typed from "react-typed";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section id="home" className=" min-h-screen  ">
        <div className=" dark:bg-gradient-to-r from-white to-[#E4D0BA] h-[10vh] ">
          <nav className=" py-7  mb-12   text-center flex justify-between">
            <h1 className=" text-xl font-light text-black dark:text-black md:ml-24 ml-5">
              Aizada Zhexengaliyeva
            </h1>
            <ul className="flex items-center  justify-between md:px-32">
              <li>
                <BsFillMoonStarsFill
                  color={darkMode ? "white" : "pink"}
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1E3FaDZO_w0pNYBA1_TABOD6dECOcXULm/view?usp=share_link"
                  className="  bg-[white] text-[#D9BFA2] p-2 rounded-md ml-8 md:mr-0 mr-5"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="   md:grid grid-cols-2 md:h-[90vh] md:pb-0 pb-10 ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF] py-12 md:py-0">
            <div className=" relative mb-5 ">
              <img
                src={require("./assets/portrait.jpg")}
                className=" rounded-full max-h-72 mx-auto md:max-h-96"
              />
            </div>
            <div className=" text-5xl flex  gap-12 py-3 text-gray-800 ">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aizada-zhexengaliyeva/"
              >
                <AiFillLinkedin color={darkMode ? "white" : "black"} />
              </a>

              <a target="_blank" href="https://www.instagram.com/zhksnglv.a/">
                <AiFillInstagram color={darkMode ? "white" : "black"} />
              </a>
              <a target="_blank" href="mailto:aizada.zhex@gmail.com">
                <IoMdMail color={darkMode ? "white" : "black"} />
              </a>
              <a
                target="_blank"
                href="https://www.pinterest.com/aizas_lifestyle/?eq=aizas%20lifes&etslf=14133"
              >
                <FaPinterestSquare color={darkMode ? "white" : "black"} />
              </a>
              
            </div>
          </div>

          <div className=" text-center pt-10 flex flex-col justify-center bg-white ">
            <h1 className="  font-serif text-4xl  md:text-4xl lg:text-5xl  text-black  dark:text-black font-medium ">
              Hi, I'm{" "}
              <span className="inline-flex h-20 pt-2 overflow-x-hidden  whitespace-nowrap text-brand-accent ">
                <Typed
                  //className='md:text-4xl sm:text-3xl text-xl font-semibold px-2  text-white'
                  strings={["Aizada"]}
                  typeSpeed={120}
                  backSpeed={40}
                  cursorChar="|"
                />
              </span>
            </h1>
            <h3 className=" dark:text-black text-2xl pb-5 md:py-2 text-black ">
              Marketing Specialist | Social Media Manager | Content Creator
            </h3>
            <p className=" dark:text-gray-600 py-2 leading-8 text-gray-600 max-w-xl mx-auto px-2 ">
              I am self-motivated, curious, observant, and a natural
              action-taker! I define new or improve existing strategies for
              better results and overall efficiency. I am a fast learner with an
              insatiable appetite for knowledge. What I learn, I share. I get
              results by driving deadlines and motivating others. My energy,
              organization, and motivation are infectious and inspirational. I
              enjoy working cross-functionally and helping the whole team
              succeed. I know no obstacles and my ambitions are limitless.
            </p>
          </div>
        </div>
      </section>

      <section
        id="aboutMe"
        className=" min-h-screen bg-gradient-to-r from-white to-[#E4D0BA]"
      >
        <div className=" text-center">
          <h3 className="text-gray-600 text-3xl  pt-10  font-semibold ">
            Services
          </h3>
        </div>

        <div className="  items-center justify-center  md:flex md:gap-2 lg:flex lg:gap-5 xl:flex xl:gap-10 pb-5 md:pb-0">
          <div className=" bg-[#ECDECF]    max-w-lg hover:scale-105 duration-100  flex-1 text-center p-5 rounded-xl my-10 mx-5 shadow-lg  shadow-slate-600 dark:shadow-slate-200">
            <img
              src={require("./assets/content.jpg")}
              className=" rounded-xl max-h-72 mx-auto "
            />
            <h3 className="dark:text-black text-lg font-medium pt-8 pb-2">
              Content Creation
            </h3>
            <p className="dark:text-gray-700  py-2 leading-8 text-gray-800">
              I create{" "}
              <span className=" text-pink-500 dark:text-pink-500">
                Creative & Responsive
              </span>{" "}
              web apps and pages as you request.
            </p>
            <div className=" py-5  ">
              <h4 className="dark:text-black text-m font-medium">Tech Stack</h4>
              <p className="dark:text-gray-700 italic  text-gray-800">
                ReactJs
              </p>
              <p className="dark:text-gray-700 italic  text-gray-800">NextJs</p>
              <p className="dark:text-gray-700 italic  text-gray-800">
                UI Frameworks
              </p>
              <p className="dark:text-gray-700 italic  text-gray-800">
                Firebase
              </p>
              <p className="dark:text-gray-700 italic  text-gray-800">
                MongoDB
              </p>
            </div>
          </div>

          <div className="bg-pink-200  max-w-lg hover:scale-105 duration-100   flex-1 text-center shadow-lg p-5  px-5  rounded-xl my-10 mx-5 shadow-slate-600 dark:shadow-slate-200">
            <img
              src={require("./assets/socialMedia.jpg")}
              className=" rounded-xl max-h-72 mx-auto "
            />
            <h3 className="dark:text-black text-lg font-medium pt-8 pb-2">
              Social Media Management
            </h3>
            <p className="dark:text-gray-700 py-2 leading-8 text-gray-800">
              I create{" "}
              <span className=" text-pink-500 dark:text-pink-500">
                Cross-Platform
              </span>{" "}
              mobile applications with responsive and cool designs. I also
              publish your applications on AppStore and PlayStore.
            </p>
            <div className=" py-5  ">
              <h4 className="dark:text-black text-m font-medium">Tech Stack</h4>
              <p className="dark:text-gray-700 italic  text-gray-800">
                React Native
              </p>
              <p className="dark:text-gray-700 italic text-gray-800">Redux</p>
              <p className="dark:text-gray-700 italic  text-gray-800">
                Firebase
              </p>
              <p className="dark:text-gray-700  italic text-gray-800">
                MongoDB
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className=" px-5 text-center">
          <h3 className="dark:text-white text-3xl py-2 font-semibold">
            Portfolio
          </h3>
          <p className="dark:text-gray-300 py-2 leading-8 text-gray-800">
            I have been working as a freelance developer since 2017 which gave
            me a chance to create an impressive portfolio. You can see my{" "}
            <span className="dark:text-teal-200 text-teal-500">Web Apps</span>,{" "}
            <span className="dark:text-teal-200 text-teal-500">
              Mobile Applications
            </span>{" "}
            and <span className="dark:text-teal-200 text-teal-500">Games</span>{" "}
            below.
          </p>
        </div>

        <div className="flex flex-col gap-5 py-10 px-5 md:flex-row md:flex-wrap">
          <div className=" hover:scale-105 duration-100 basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl  flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="http://roalibiten.github.io/admin_dashboard"
            >
              <img
                src={require("./assets/admin_dashboard.png")}
                className=" mx-auto rounded-lg object-cover"
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Admin Dashboard Web App
            </h2>
          </div>

          <div className=" hover:scale-105 duration-100  basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl  flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="http://rovlisoftware.com/"
            >
              <img
                src={require("./assets/rovli.png")}
                className=" mx-auto rounded-lg object-cover"
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              ROVLI Web Page
            </h2>
          </div>

          <div className=" hover:scale-105 duration-100  basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl  flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://roalibiten.github.io/movie_app_reactjs/"
            >
              <img
                src={require("./assets/MovieApp.png")}
                className=" mx-auto rounded-lg object-cover"
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Movie Web App
            </h2>
          </div>
          <div className=" hover:scale-105 duration-100  basis-1/3 flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://www.oculus.com/experiences/quest/6193634367344819/"
            >
              <img
                src={require("./assets/chatApp.png")}
                className="mx-auto rounded-lg object-cover "
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Customer Service Chat Web App
            </h2>
          </div>

          <div className=" hover:scale-105 duration-100  basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl  flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.roalibiten.campuswide"
            >
              <img
                src={require("./assets/CampusWide.png")}
                className=" mx-auto rounded-lg object-cover"
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Campus Wide Mobile App
            </h2>
          </div>

          <div className=" hover:scale-105 duration-100  basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.ortadogu.mdclub"
            >
              <img
                src={require("./assets/MDClub.png")}
                className="  mx-auto rounded-lg object-cover "
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              MD Club Mobile App
            </h2>
          </div>
          <div className=" hover:scale-105 duration-100  basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.roalibiten.FallinBall"
            >
              <img
                src={require("./assets/FallingBall.png")}
                className="mx-auto rounded-lg object-cover  "
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Fall'in Ball Mobile Game
            </h2>
          </div>
          <div className=" hover:scale-105 duration-100  basis-1/3 flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.roalibiten.BalanceBoard"
            >
              <img
                src={require("./assets/BalanceBoard.png")}
                className="mx-auto rounded-lg object-cover  "
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Balance Board Mobile Game
            </h2>
          </div>
          <div className=" hover:scale-105 duration-100  basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.reflexboard"
            >
              <img
                src={require("./assets/ReflexBoard.png")}
                className="mx-auto rounded-lg object-cover  "
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Reflex Board Mobile Game
            </h2>
          </div>
          <div className=" hover:scale-105 duration-100  basis-1/3 flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.roalibiten.tetrex3d"
            >
              <img
                src={require("./assets/Tetrex3D.png")}
                className="mx-auto rounded-lg object-cover  "
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Tetrex 3D Mobile Game
            </h2>
          </div>
          <div className=" hover:scale-105 duration-100  basis-1/3 flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex flex-col text-center">
            <a
              className="object-cover flex flex-1 "
              target="_blank"
              href="https://www.oculus.com/experiences/quest/6193634367344819/"
            >
              <img
                src={require("./assets/Tetrex3DVR.png")}
                className="mx-auto rounded-lg object-cover "
              />
            </a>
            <h2 className="m-5 dark:text-gray-300  text-gray-800 font-bold ">
              Tetrex 3D VR Game
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
