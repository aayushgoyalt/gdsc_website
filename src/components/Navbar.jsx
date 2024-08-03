import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  const navigate = useNavigate();
  
  const logoRef = useRef(null); // : HTMLImageElement
  function rotateLogo() {
    const img = logoRef.current;
    if (!img) { return; }
    if (img.style.animation != '') { return; }
    img.style.animation = 'spin .7s ease-in-out, zoom .75s ease-out';
    setTimeout(()=>{img.style.animation = '';}, 800);
  }

  function wiggleLogo() {
    const img = logoRef.current;
    if (!img) { return; }
    if (img.style.animation != '') { return; }
    img.style.animation = 'wiggle .7s ease-in-out, zoom .75s ease-out';
    setTimeout(()=>{img.style.animation = '';}, 800);
  }

  return (
    <div className='flex min-w-96 m-auto rounded-3xl border-2 h-[10vh] items-center bg-white py-4 w-[80%] max-lg:w-[85%] max-md:w-[90%] max-sm:w-full px-8 pr-12 max-lg:px-4 max-md:px-2'>
      <div className="flex max-w-[12rem] cursor-pointer" onClick={() => {rotateLogo();navigate('/');}} onMouseEnter={() => {wiggleLogo()}}>
        <img src={logo} alt="GDSC Logo" className='h-6 m-2' ref={logoRef}/>
        <h2 className='font-extrabold text-gray-800 m-auto'>GDSC Thapar</h2>
      </div>
      <div className="flex flex-grow justify-between max-w-[35rem] max-lg:max-w-[30rem] ml-auto flex-shrink pl-1">
        <div className="m-auto cursor-pointer pr-1 text-gray-600 font-semibold" onClick={() => {navigate('/projects')}}>Projects</div>
        <div className="m-auto cursor-pointer pr-1 text-gray-600 font-semibold" onClick={() => {navigate('/trial')}}>TESTING</div>
        <div className="m-auto cursor-pointer pr-1 text-gray-600 font-semibold" onClick={() => {navigate('/events')}}>Events</div>
        <div className="m-auto cursor-pointer pr-1 text-gray-600 font-semibold" onClick={() => {navigate('/team')}}>Team</div>
        <a href="https://github.com">
          <button className='bg-black text-white max-lg:px-4 max-md:mx-2 text-ellipsis overflow-hidden px-8 py-2 rounded-3xl transition-all border-opacity-0 border-2 border-black hover:border-opacity-100 hover:text-black hover:bg-white hover:scale-105'>Form Link</button>
        </a>
      </div>
    </div>
  )
}

export default Navbar
