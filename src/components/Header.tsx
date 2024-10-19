import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"

export default function Header() {
  // State to manage the menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="h-8 w-auto text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
            <line x1="8" x2="8.01" y1="16" y2="16" />
            <line x1="8" x2="8.01" y1="20" y2="20" />
            <line x1="12" x2="12.01" y1="18" y2="18" />
            <line x1="12" x2="12.01" y1="22" y2="22" />
            <line x1="16" x2="16.01" y1="16" y2="16" />
            <line x1="16" x2="16.01" y1="20" y2="20" />
          </svg>
          <a href="/"><span className="ml-2 text-xl font-bold text-gray-900">IdeationX</span></a>
        </div>

        {/* Hamburger Menu for Small Devices */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="flex items-center focus:outline-none"
          >
            <svg 
              className="h-6 w-6 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden md:flex space-x-8">
          <a href="/about" className="text-gray-500 hover:text-gray-900 py-2">About</a>
          <a href="/services" className="text-gray-500 hover:text-gray-900 py-2">Services</a>
          <a href="/contact" className="text-gray-500 hover:text-gray-900 py-2">Contact</a>
        </nav>

        {/* Get Started Button for Desktop Only */}
        <div className="hidden md:block">
          <Button onClick={() => navigate('/')}>Get Started</Button>
        </div>
      </div>

      {/* Dropdown Menu for Small Devices */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded mt-2 p-4">
          <div className="flex flex-col space-y-2">
            <a href="/about" className="text-gray-500 hover:text-gray-900">About</a>
            <a href="/services" className="text-gray-500 hover:text-gray-900">Services</a>
            <a href="/contact" className="text-gray-500 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
