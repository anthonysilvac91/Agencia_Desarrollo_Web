import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../Utils/menuItems';
import logo_light from '../assets/logo_white.png'



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const location = useLocation();
   

  return (
    <header className='px-psm xl:px-pxl 2xl:px-p2xl'>
    <nav className=''>
        <div className='flex justify-between py-5 items-center'>
            
            <div className='w-[150px] 2xl:w-[180px] xl:w-[160px]'>
                <img className='w-100' src={logo_light} alt="" />
            </div>
            <div className='text-2xl lg:hidden'>
                <FontAwesomeIcon icon={menuOpen ? faX : faBars} onClick={toggleMenu}/>
            </div>

            {/* Menú en línea para pantallas grandes */}
            <ul className='hidden lg:flex gap-6 2xl:text-[20px] xl:text-[18px]'>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link to={`${item.route.toLowerCase()}`}>
                                    <span className={`${location.pathname === item.route.toLowerCase() ? 'text-blue-dark' : 'text-black'} font-bold cursor-pointer`}>
                                        {item.text}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
            
            

        </div>
        <div className='bg-blue-dark h-[2px] w-full left-0 fixed'></div>

            
        


        {menuOpen && (
            <> 
           <div className='fixed bg-white w-full h-full left-0 py-5 px-12 z-50 border-t-2 border-blue-dark'>
                <ul>
                {menuItems.map((item,index) =>(
                    <li key={index}>
                        <Link to={`${item.route.toLowerCase()}`}>
                            <span className={`${location.pathname === `${item.route.toLowerCase()}` ? 'text-blue-dark' : 'text-black'} font-bold cursor-pointer`}>
                            {item.text} 
                            </span>                        
                        </Link>
                        
                        
                    </li>
                ))}
                </ul>
             </div> 
             
             </>
            
        )}  
                
    </nav>


    
   
    
</header>
  )
}

export default Navbar

