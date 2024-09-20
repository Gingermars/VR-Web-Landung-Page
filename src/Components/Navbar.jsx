import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { navItems } from '../constants';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };
  
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/90">
        <div className="container px--4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center flex-shrink-0">
                <img className='h-10 w-10' src={logo} alt="logo" />
                <span className="text-xl tracking-tight">nyx Studios</span>
              </div>
              <ul className="hidden lg:flex ml-14 space-x-12">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="hidden lg:flex justify-center space-x-12 item-center">
                <a href="#" className='py-2 px-3 border rounded-md'>
                  Sign In
                </a>
                <a href="#" className='bg-gradient-to-r from-purple-600 to-purple-900 py-2 px-3 rounded-md transition-transform duration-300  ease-in-out z-10'>
                  Create an account
                </a>
              </div>
              <div className="lg:hidden md:flex-col justify-end">
                <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
              </div>
            </div>
            {mobileDrawerOpen && (
              <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                  {navItems.map((item, index) => (
                    <li key={index} className='py-4'>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-6">
                  <a href="#" className='py-2 px-3 border rounded-md'>
                    Sign In
                  </a>
                  <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-purple-600 to-purple-900'>
                    Create an account
                  </a>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar