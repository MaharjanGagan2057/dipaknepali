import Link from 'next/link'
import Donatebutton from './Donatebutton'

const Navbar = () => {
  return (
    <div>

<nav className=" bg-gray-50   text-black dark:bg-gray-800  dark:text-white fixed w-full z-20 top-0 start-0 border-b border-default ">
  <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="" className="h-15 w-15 rounded-full" alt="Dipak photo" />
        <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Dipak Nepali</span>
    </Link>
    <button data-collapse-toggle="navbar-solid" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-solid" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
    </button>
    <div className="hidden w-full  md:block md:w-auto" id="navbar-solid">
      <ul className="font-medium flex flex-col p-4 items-center md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-secondary-soft">
      <li>
          <Link href="/" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
          <Link href="/services" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</Link>
        </li>
        <li>
          <Link href="/gallery" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Gallery</Link>
        </li>
        <li>
          <Link href="/about" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link href="/contact" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</Link>
        </li>
        <li>
          <Link href="/googleCalendar" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Book Appointment</Link>
        </li>

        <Donatebutton/>
      </ul>
    </div>
       
  </div>
</nav>

    </div>
  )
}

export default Navbar