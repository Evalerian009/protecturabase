import { useState, useEffect } from 'react'
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/constants';
import { styles } from '../constants/styles';

const Navbar = () => {
  const [ scroll, setScroll ] = useState(false)
  const [ menu, setMenu ] = useState(false)

  const checkScroll = () => ((
    window.scrollY >= 80 ? setScroll(true) : setScroll(false)
  )) 

  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
  
    return () => {
      window.removeEventListener("scroll", checkScroll); // ✅ Cleanup function
    };
  }, []); // Dependency array ensures it runs only once on mount
  

  const handleMenu = () => ((
    setMenu(!menu)
  ))
  
  return (
    <>
      <nav id='nav' className={`fixed z-[1000] w-full left-0 top-0 flex justify-between items-center ${styles.padX} py-7 transition-all duration-300 ${scroll ? 'lg:bg-[#1e1e1ea9] border-border backdrop-blur-xl' : 'lg:bg-transparent'} text-white bg-bgTet`}>
        <Link to="/" 
          className="uppercase text-2xl lg:text-2xl font-bold lg:font-semibold"
          onClick={() => {
            setMenu(false);
            window.scrollTo(0, 0); // Fixes the typo
          }}>
              PROTECTURABASE
        </Link>
        <div className={`hidden lg:flex gap-10 uppercase text-[14px] font-semibold`}>
          {navLinks.map(item => ((
            <Link 
              to={item.url} key={item.id} className='hover:text-lightTxt' 
              onClick={() => {
                setMenu(false);
                window.scrollTo(0, 0); // Fixes the typo
              }}>
                {item.name}
            </Link>
          )))}
        </div>
        <button onClick={handleMenu} className='cursor-pointer lg:hidden text-3xl'>
          <HiMiniBars3 />
        </button>
      </nav>

      {/* Mobile */}
      <div  id='nav' className={`lg:hidden fixed z-[999] w-full ${menu ? 'top-[88px] shadow-2xl' : '-top-[190px] shadow-0'} flex flex-col text-center uppercase text-[14px] bg-pri py-6 transition-all duration-500 text-lightTxt bg-bgTet`}>
        {navLinks.map(item => ((
          <Link 
            key={item.id} to={item.url} className='hover:text-sec py-4.5' 
            onClick={() => {
              setMenu(false);
              window.scrollTo(0, 0); // Fixes the typo
            }}>
              {item.name}
            </Link>
        )))}
      </div>
    </>
  )
}

export default Navbar