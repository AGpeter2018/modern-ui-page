import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = ({scrolled}) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [markTab, setMarkTab] = useState('home')
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-900 shadow-2xl' : 'bg-slate-950/20 backdrop-blur-sm'}`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
                <div className='flex items-center'>
                    <div>
                     <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg " className="w-8 h-8 sm:w-9 sm:h-9">
  <defs>
    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity: "1" }}/>
      <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity: '1' }}/>
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>
  <circle cx="50" cy="50" r="40" fill="url(#mainGradient)" opacity="0.15"/>
  <circle cx="50" cy="50" r="40" fill="none" stroke="url(#mainGradient)" stroke-width="2" opacity="0.3"/>
  <g transform="translate(50, 50)" filter="url(#shadow)">
    <path d="M -5 -20 L -20 0 L -5 20" 
          stroke="url(#mainGradient)" 
          stroke-width="6" 
          fill="none" 
          stroke-linecap="round"
          stroke-linejoin="round"/>
    <line x1="-2" y1="22" x2="2" y2="-22" 
          stroke="url(#mainGradient)" 
          stroke-width="6" 
          stroke-linecap="round"/>
    <path d="M 5 -20 L 20 0 L 5 20" 
          stroke="url(#mainGradient)" 
          stroke-width="6" 
          fill="none" 
          stroke-linecap="round"
          stroke-linejoin="round"/>
  </g>
</svg>   
                    </div>
                    <div className='text-sky-100 text-xl font-bold font-serif tracking-tight w-6 h-6 sm:w-8 sm:h-8 cursor-pointer'>
                         <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">Coda</span>
                <span className="text-blue-400">Block</span>
              </span>
                    </div>
                </div>
                <div className='hidden md:flex items-center space-x-6 lg:space-8'>
                  <AnchorLink href="#home" offset={50} >
                    <a  className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'home' ? ('border-b border-blue-900 p-5 '):('')}`} onClick={() => setMarkTab('home')}>Home</a>
                  </AnchorLink>
                  <AnchorLink href="#features" offset={50} >
                    <a  className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'features' ? ('border-b border-blue-900 p-5 '):('')}`} onClick={() => setMarkTab('features')}>Features</a>
                  </AnchorLink>
                  <AnchorLink href="#pricing" offset={50}>
                    <a  className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'pricing' ? ('border-b border-blue-900 p-5 '):('')}`} onClick={() => setMarkTab('pricing')}>Pricing</a>
                  </AnchorLink>
                  <AnchorLink href="#testimonials" offset={50}>
                    <a className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'testimonies' ? ('border-b border-blue-900 p-5 '):('')}`} onClick={() => setMarkTab('testimonies')}>Testimonials</a>
                  </AnchorLink>
                </div>
                <button className='md:hidden cursor-pointer p-2 text-gray-300 hover:text-white' onClick={()=> setOpenMenu((prev) => !prev)}>
                    {openMenu ? 
                    (<X className='w-5 h-6 sm:w-6 h-6'/>)
                    :
                    (<Menu className='w-5 h-6 sm:w-6 h-6'/>)
                }
                </button>
            </div>
        </div>
        {openMenu && (
            <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animation-in slide-in-from-top duration-300 shadow-2xl'>
                <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 transition-all duration-5'>
                     <a href="#home" className='block text-gray-300 hover:text-white hover:bg-slate-950 hover:p-2 rounded-xl text-sm lg:text-base' onClick={() => setOpenMenu(false)}>Home</a>
                     <a href="#features" className='block text-gray-300 hover:text-white hover:bg-slate-950 hover:p-2 rounded-xl text-sm lg:text-base' onClick={() => setOpenMenu(false)}>Features</a>
                    <a href="#pricing" className='block text-gray-300 hover:text-white hover:bg-slate-950 hover:p-2 rounded-xl text-sm lg:text-base' onClick={() => setOpenMenu(false)}>Pricing</a>
                    <a href="#testimonial" className='block text-gray-300 hover:text-white hover:bg-slate-950 hover:p-2 rounded-xl text-sm lg:text-base' onClick={() => setOpenMenu(false)}>Testimonials</a>
                </div>
            </div>
            )}
    </nav>
  )
}

export default Navbar