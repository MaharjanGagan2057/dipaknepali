import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col space-y-10 justify-center p-10 bg-gray-50 dark:bg-gray-800">

<nav className="flex justify-center flex-wrap gap-6 text-gray-300 font-medium">
    <a className="hover:text-gray-900" href="#">Home</a>
    <a className="hover:text-gray-900" href="#">About</a>
    <a className="hover:text-gray-900" href="#">Services</a>
    <a className="hover:text-gray-900" href="#">Media</a>
    <a className="hover:text-gray-900" href="#">Gallery</a>
    <a className="hover:text-gray-900" href="#">Contact</a>
</nav>



<div className="flex justify-center space-x-5">
    <a href="https://www.facebook.com/share/17JaBNZxUQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
  
</div>
<p className="text-center text-gray-300 font-medium">&copy; 2025 Dipak. All rights reservered.</p>
</footer>
    
    </div>
  )
}

export default Footer