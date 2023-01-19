import logo from './logo.svg';
import './App.css';
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
function App() {
  return (
    <div className=" bg-white ">
      <section className="bg-white min-h-screen">

        <nav className=' py-10 px-5 mb-12 flex justify-between'>
          <h1 className=' text-xl font-light text-black'>Roali Biten</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
            <li>
              <a className=' bg-gradient-to-r from-cyan-700 to-teal-500 text-white p-2 rounded-md ml-8' href='#'>Download Resume</a>
            </li>
          </ul>
        </nav>

        <div className=' text-center p-10 '>
          <h2 className='text-5xl py-2 text-teal-500 font-medium'>Roali Biten</h2>
          <h3 className=' text-2xl py-2'>Mobile & Frontend Developer</h3>
          <p className=' py-2 leading-8 text-gray-800'>About me About me About me  About me About me About me About me About me About me About me About me!</p>
        </div>

        <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-800'>
          <a href='https://www.linkedin.com/in/roali-tar%C4%B1k-biten-07b95b15b/'>
            <AiFillLinkedin/>
          </a>
          <a href='https://github.com/roalibiten?tab=repositories'>
            <AiFillGithub/>
          </a>
        </div>

        <div className=" relative py-8">
          <img src={require('./assets/portrait.jpg')} className=" rounded-full max-h-72 mx-auto " />
        </div>

      </section>
    </div>
  );
}

export default App;
