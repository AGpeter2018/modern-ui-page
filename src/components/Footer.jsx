import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main footer content - hidden on mobile, visible on sm and up */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <div className="rounded-lg">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg " className="w-6 h-6 sm:w-8 sm:h-8">
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
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">Coda</span>
                <span className="text-blue-400">Block</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Transform your workflow with AI-powered tools and automation.
              Built for modern teams.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://x.com/AdenijiPet52714?t=7p0vbj0_F1RqAuiDu_q63w&s=09"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/AGpeter2018"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Github className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/adeniji-peter-6342511bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="adenijiPeter2018@gmail.com"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Footer links - visible on sm and up */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t-0 sm:border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 CodaBlock. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}