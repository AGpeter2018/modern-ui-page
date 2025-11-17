import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'


const Navbar = ({scrolled}) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [markTab, setMarkTab] = useState('features')
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-900 shadow-2xl' : 'bg-slate-950/20 backdrop-blur-sm'}`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
                <div>
                    <div className='text-sky-100 text-xl font-bold font-serif tracking-tight w-6 h-6 sm:w-8 sm:h-8 cursor-pointer'>AGpeter</div>
                </div>
                <div className='hidden md:flex items-center space-x-6 lg:space-8'>
                    <a href="#features" className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'features' ? ('border-b border-blue-900 p-5 '):('')}`} onClick={() => setMarkTab('features')}>Features</a>
                    <a href="#pricing" className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'pricing' ? ('border-b border-blue-900 p-5 '):('')}`} onClick={() => setMarkTab('pricing')}>Pricing</a>
                    <a href="#testimonial" className={`text-gray-300 hover:text-white text-sm lg:text-base ${markTab === 'testimonies' ? ('border-b border-blue-900 p-5 '):('')}`} onClick={() => setMarkTab('testimonies')}>Testimonials</a>
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