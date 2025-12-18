import React from 'react';

export const metadata = {
  title: "Contact | SafeNest",
  description: "Get in touch with SafeNest at Perumnas Housing.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
        <p className="text-slate-600">Ready to join the SafeNest community? We’re here to help.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">Contact Details</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="font-bold text-slate-900">Address:</span>
                <p className="text-slate-600">SafeNest, Perumnas Housing, <br />Nasarawa State, Nigeria</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-slate-900">Email:</span>
                <p className="text-slate-600">hello@safenest.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-slate-900">Phone:</span>
                <p className="text-slate-600">+234 800 SAFENEST</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-100 rounded-2xl">
            <h3 className="font-bold mb-2">Office Hours</h3>
            <p className="text-sm text-slate-600">Monday – Friday: 9:00 AM – 5:00 PM</p>
            <p className="text-sm text-slate-600">Saturday: 10:00 AM – 2:00 PM</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white p-8 border border-slate-200 rounded-3xl shadow-sm">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full p-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full p-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea rows="4" className="w-full p-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition">
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Optional Map Placeholder */}
      <div className="mt-20 w-full h-64 bg-slate-200 rounded-3xl flex items-center justify-center text-slate-500 italic">
        [Interactive map showing SafeNest location within Perumnas Housing]
      </div>
    </main>
  );
}