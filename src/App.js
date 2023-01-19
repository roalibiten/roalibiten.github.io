import logo from './logo.svg';
import './App.css';
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
function App() {
  return (
    <div className=" bg-white md:px-10 lg:px-20 xl:px-40 ">
      <section id='home' className="bg-white min-h-screen">
        <nav className=' py-7 px-5 mb-12 flex justify-between'>
          <h1 className=' text-xl font-light text-black'>Roali Biten</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
            <li>
              <a target="_blank" href="https://drive.google.com/file/d/1E3FaDZO_w0pNYBA1_TABOD6dECOcXULm/view?usp=share_link" className=' bg-gradient-to-r from-cyan-700 to-teal-500 text-white p-2 rounded-md ml-8' >Resume</a>
            </li>
          </ul>
        </nav>

        <div className=" relative py-4 md:py-8">
          <img src={require('./assets/portrait.jpg')} className=" rounded-full max-h-72 mx-auto md:max-h-96" />
        </div>
        <div className=' text-5xl flex justify-center gap-12 py-3 text-gray-800'>
          <a target="_blank" href='https://www.linkedin.com/in/roali-tar%C4%B1k-biten-07b95b15b/'>
            <AiFillLinkedin/>
          </a>
          <a target="_blank" href='https://github.com/roalibiten?tab=repositories'>
            <AiFillGithub/>
          </a>
        </div>
        <div className=' text-center p-10 '>
          <h2 className='text-5xl py-2 text-teal-500 font-medium'>Roali Biten</h2>
          <h3 className=' text-2xl py-2'>Mobile & Frontend Developer</h3>
          <p className=' py-2 leading-8 text-gray-800 max-w-xl mx-auto'>About me About me About me  About me About me About me About me About me About me About me About me!</p>
        </div>
      </section>

      <section id='aboutMe' className="bg-white min-h-screen">
        <div className=' px-5 text-center'>
          <h3 className=' text-3xl py-2 font-semibold '>What I do?</h3>
          <p className=' py-2 leading-8 text-gray-800'>
            About me About me <span className=' text-teal-500'>About me</span>  About me About me About me About me About me About me About me About me!
          </p>
        </div>

        <div className=' md:flex md:gap-2 lg:flex lg:gap-5 xl:flex xl:gap-10'>
          <div className=' flex-1 text-center p-5 rounded-xl my-10 mx-5 shadow-lg  shadow-slate-600'>
            <img src={require('./assets/mobileApps.jpg')} className=" rounded-xl max-h-72 mx-auto " />
            <h3 className=' text-lg font-medium pt-8 pb-2'>Mobile Applications</h3>
            <p className=' py-2 leading-8 text-gray-800'>
            I create <span className=' text-teal-500'>Cross-Platform</span> mobile applications with responsive and cool designs. I also publish your applications on AppStore and PlayStore.
            </p>
            <div className=' py-5  '>

            <h4 className=' text-m font-medium'>Tech Stack</h4>
            <p className=' italic  text-gray-800'>React Native</p>
            <p className=' italic text-gray-800'>Redux</p>
            <p className=' italic  text-gray-800'>Firebase</p>
            <p className='  italic text-gray-800'>MongoDB</p>
            </div>
          </div>
          <div className='  flex-1 text-center shadow-lg px-5 rounded-xl my-10 mx-5 shadow-slate-600'>
            <img src={require('./assets/webApps.jpg')} className=" rounded-xl max-h-72 mx-auto " />
            <h3 className=' text-lg font-medium pt-8 pb-2'>Web Applications</h3>
            <p className=' py-2 leading-8 text-gray-800'>
            I create <span className=' text-teal-500'>Creative & Responsive</span> web apps and pages as you request.
            </p>
            <div className=' py-5  '>
            <h4 className=' text-m font-medium'>Tech Stack</h4>
            <p className=' italic  text-gray-800'>ReactJs</p>
            <p className=' italic  text-gray-800'>NextJs</p>
            <p className=' italic  text-gray-800'>UI Frameworks</p>
            <p className=' italic  text-gray-800'>Firebase</p>
            <p className=' italic  text-gray-800'>MongoDB</p>
            </div>
          </div>
          <div className='flex-1 text-center shadow-lg p-5 rounded-xl my-10 mx-5 shadow-slate-600'>
            <img src={require('./assets/vrApps.jpg')} className=" rounded-xl max-h-72 mx-auto " />
            <h3 className=' text-lg font-medium pt-8 pb-2'>Virtual Reality</h3>
            <p className=' py-2 leading-8 text-gray-800'>
            I create <span className=' text-teal-500'>Immersive</span> VR apps for you to use as a simulations for your business. I also create VR games and publish your apps on Oculus Store.
            </p>
            <div className=' py-5  '>

            <h4 className=' text-m font-medium'>Tech Stack</h4>
            <p className='  italic text-gray-800'>Unity 3D</p>
            <p className=' italic  text-gray-800'>C#</p>
            <p className=' italic  text-gray-800'>Oculus Series</p>
            </div>
          </div>
        </div>
      </section>

      <section id='portfolio'>
        <div className=' px-5 text-center'>
          <h3 className=' text-3xl py-2 font-semibold'>Portfolio</h3>
          <p className=' py-2 leading-8 text-gray-800'>
            I have been working as a freelance developer since 2017 which gave me a chance to create an impressive portfolio. You can see my <span className=' text-teal-500'>Web Apps</span>, <span className=' text-teal-500'>Mobile Applications</span> and <span className=' text-teal-500'>Games</span> below.
          </p>
        </div>
        <div className='flex flex-col gap-5 py-10 px-5 md:flex-row md:flex-wrap'>
          <div className=' basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl  flex'>
            <a className='object-cover flex flex-1'  target="_blank" href="https://play.google.com/store/apps/details?id=com.roalibiten.campuswide">
              <img src={require('./assets/CampusWide.png')} className=" mx-auto rounded-lg object-cover" />
            </a>
          </div>
          <div className=' basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl  flex'>
            <a className='object-cover flex flex-1' target="_blank" href="http://rovlisoftware.com/">
              <img src={require('./assets/rovli.png')} className=" mx-auto rounded-lg object-cover" />
            </a>
          </div>
          <div className=' basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl  flex'>
            <a className='object-cover flex flex-1'  target="_blank" href="https://roalibiten.github.io/movie_app_reactjs/">
            <img src={require('./assets/MovieApp.png')} className=" mx-auto rounded-lg object-cover" />
            </a>
          </div>
          <div className=' basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex'>
            <a className='object-cover flex flex-1'  target="_blank" href="https://play.google.com/store/apps/details?id=com.ortadogu.mdclub">
            <img src={require('./assets/MDClub.png')} className="  mx-auto rounded-lg object-cover " />
            </a>
          </div>
          <div className=' basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex' >
            <a className='object-cover flex flex-1'  target="_blank" href="https://play.google.com/store/apps/details?id=com.roalibiten.FallinBall">
            <img src={require('./assets/FallingBall.png')} className="mx-auto rounded-lg object-cover  " />
            </a>
          </div>
          <div className=' basis-1/3 flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex'>
            <a className='object-cover flex flex-1'  target="_blank" href="https://play.google.com/store/apps/details?id=com.roalibiten.BalanceBoard">
            <img src={require('./assets/BalanceBoard.png')} className="mx-auto rounded-lg object-cover  " />
            </a>
          </div>
          <div className=' basis-1/3  flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex'>
            <a className='object-cover flex flex-1'  target="_blank" href="https://play.google.com/store/apps/details?id=com.reflexboard">
            <img src={require('./assets/ReflexBoard.png')} className="mx-auto rounded-lg object-cover  " />
            </a>
          </div>
          <div className=' basis-1/3 flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex'>
            <a className='object-cover flex flex-1'  target="_blank" href="https://play.google.com/store/apps/details?id=com.roalibiten.tetrex3d">
            <img src={require('./assets/Tetrex3D.png')} className="mx-auto rounded-lg object-cover  " />
            </a>
          </div>
          <div className=' basis-1/3 flex-1 lg:basis-1/4 shadow-lg  shadow-slate-600 rounded-xl flex'>
            <a className='object-cover flex flex-1'  target="_blank" href="https://www.oculus.com/experiences/quest/6193634367344819/">
            <img src={require('./assets/Tetrex3DVR.png')} className="mx-auto rounded-lg object-cover  " />
            </a>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default App;
