import React from 'react'

const footer = () => {
  return (

    
      <footer className="bg-white border-t px-12 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <h4 className="font-semibold text-xl mb-4 text-blue-800">ELVIA JEWELS</h4>
          <p className="text-black">Premium jewellery brand delivering elegance and trust.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-blue-800">Quick Links</h4>
          <p className="text-black">Home</p>
          <p className="text-black">Shop</p>
          <p className="text-black">Contact</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-blue-800">Collections</h4>
          <p className="text-black">Rings</p>
          <p className="text-black">Necklaces</p>
          <p className="text-black">Bracelets</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-blue-800">Contact</h4>
          <p className="text-black" >support@elviajewels.com</p>
          <p className="text-black">+91 9876543210</p>
        </div>
      </footer>
  )
}
export default footer
