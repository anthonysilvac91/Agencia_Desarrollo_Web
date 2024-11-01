import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../Utils/menuItems';
import logo_light from '../assets/logo_light.png'



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const location = useLocation();
   

  return (
    <nav>
        <div className='flex justify-between py-5 items-center'>
            
            <div className='w-[150px]'>
                <img className='w-100' src={logo_light} alt="" />
            </div>
            <div className='text-2xl'>
                <FontAwesomeIcon icon={menuOpen ? faX : faBars} onClick={toggleMenu}/>
            </div>
            

        </div>
        


        {menuOpen && (
            <> 
             <div onClick={toggleMenu}></div>
             <div>
             
                <ul>
                {menuItems.map((item,index) =>(
                    <li key={index}>
                        <Link to={`${item.route.toLowerCase()}`}>
                            <span className={`${location.pathname === `${item.route.toLowerCase()}` ? 'text-black' : 'text-blue'}`}>
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
    
    
  )
}

export default Navbar