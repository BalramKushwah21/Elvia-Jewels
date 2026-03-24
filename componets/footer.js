import React from 'react'

const footer = () => {
  return (

    
      <footer className="bg-white border-t px-12 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <h4 className="font-semibold text-xl mb-4">ELVIA JEWELS</h4>
          <p className="text-gray-500">Premium jewellery brand delivering elegance and trust.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <p className="text-gray-500">Home</p>
          <p className="text-gray-500">Shop</p>
          <p className="text-gray-500">Contact</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Collections</h4>
          <p className="text-gray-500">Rings</p>
          <p className="text-gray-500">Necklaces</p>
          <p className="text-gray-500">Bracelets</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-500">support@elviajewels.com</p>
          <p className="text-gray-500">+91 9876543210</p>
        </div>
      </footer>
  )
}
export default footer
