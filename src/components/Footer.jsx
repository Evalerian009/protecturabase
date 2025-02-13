import { Link } from "react-router-dom"
import { footerLinks } from "../constants/constants"
import { styles } from "../constants/styles"

const Footer = () => {
  return (
    <>    
      <div className={`${styles.padX} ${styles.padY} bg-bgTet text-[14px] flex flex-wrap gap-y-14 md:gap-x-8 lg:gap-x-4`}>
        <div className="w-full md:w-[42%] lg:w-[30%]">
          <h4 className="text-lg font-semibold uppercase text-white">About</h4>
          <p className="mt-3 font-[200] text-gray-200">Integer posuere erat a ante venenati dapibus posuere velit aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
        </div>

        {footerLinks.map((item,idx) => ((
          <div key={item.title} className={`w-full ${idx === 0 || idx === 2 ? 'md:ml-auto lg:ml-0' : ''}  md:w-[42%] lg:w-[20%]`}>
            <h5 className="text-lg font-semibold uppercase text-white">{item.title}</h5>
            <ul className="mt-3 flex flex-col gap-2">
              {item.links.map(link => (
                <li key={link.title}>
                  <Link 
                    to={`${link.link}`} 
                    className="block text-stone-200 hover:text-white font-light" 
                    onClick={()=>window.scrollTo(0, 0)}
                    >{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )))}
      </div>
      <div className="uppercase font-[200] bg-bgTet border-t border-border text-center text-[ghostwhite] text-[14px] p-4">&copy; Copyright 2020. All rights reserved.</div>
    </>
  )
}

export default Footer