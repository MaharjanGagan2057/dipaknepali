
import React from 'react'
import Image from 'next/image'



const Donate = () => {
  return (
    <div className=' text-center text-2xl p-30 h-screen bg-gray-100 text-black '> 
    <p className='p-10  '>
   <span className='text-3xl '>Your contribution makes a difference! <br />
   Thank you for your Support <br /></span> <br />
    Scan the QR code to donate via bank payment. <br />
    </p><br />
    <div className=' flex justify-center items-center  '>

   <img src="/qr.jpg" alt="Bank qr payement" className="w-130 h-130 rounded-2xl shadow-2xl shadow-amber-600 hover:shadow-amber-900 " />

    <p className='p-10 text-left'><b className='text-3xl underline '>Bank Transfer Details</b> <br /><br />
    Account Name: <b>Dipak Nepali</b> <br />
     Account Number: <b>13205080037563</b> <br /> 
     Bank Name: <b>Nepal Investment Mega Bank</b></p>
    </div>

    </div>
  )
}

export default Donate