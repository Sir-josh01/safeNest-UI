// import React from 'react'

// export default function Footer() {
//   return (
//     <div className='mt-7'>
//       <div>Logo</div>
//       <p>More Comfortable, More Classy</p>

//       <div className='lower-details flex'>
//       <div className='pe-5'>
//        <h3>Category</h3>
//         <p>About us</p>
//         <p>Blog</p>
//         <p>Contact</p>
//         </div>
//         <div>
//         <h3>Product</h3>
//         <p>Features</p>
//         <p>Integration</p>
//         <p>Advance</p>
//         </div>
     
//       </div>
    
//     </div>
//   )
// }

// src/app/components/Footer.jsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-400">SafeNest</h3>
            <p className="text-sm text-gray-400">
              Modern housing solutions for quality urban living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/units" className="text-gray-400 hover:text-white transition-colors">Available Units</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Our Vision</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-400">Email: info@safenest.com</p>
            <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SafeNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
