import React from 'react';

export const metadata = {
  title: "Available Units | SafeNest",
  description: "Explore premium residential units at SafeNest, Perumnas Housing.",
};

const units = [
  {
    id: 1,
    name: "The Guardian Suite",
    type: "2 Bedroom Bungalow",
    size: "120 sqm",
    features: ["En-suite Bedrooms", "Private Garden", "Modern Kitchen"],
    price: "Competitive Value"
  },
  {
    id: 2,
    name: "The Heritage Villa",
    type: "3 Bedroom Semi-Detached",
    size: "180 sqm",
    features: ["Spacious Lounge", "Attached Garage", "Tranquil Backyard"],
    price: "Premium Quality"
  },
  {
    id: 3,
    name: "The Zenith Estate",
    type: "4 Bedroom Detached",
    size: "250 sqm",
    features: ["Smart Home Ready", "Penthouse Balcony", "Premium Finishes"],
    price: "Ultimate Comfort"
  }
];

export default function UnitPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-800">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Units</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Every SafeNest unit within <strong>Perumnas Housing</strong> is built with precision, 
          offering a seamless blend of security and modern convenience.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {units.map((unit) => (
          <div key={unit.id} className="group border border-slate-200 rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
            {/* Visual Placeholder */}
            <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 transition-colors">
              [Architectural 3D Render of {unit.name}]
            </div>
            
            <div className="p-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{unit.type}</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">{unit.name}</h2>
              
              <div className="flex items-center gap-2 mb-6 text-sm text-slate-500 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                {unit.size} Total Area
              </div>

              <ul className="space-y-2 mb-8">
                {unit.features.map((feature, index) => (
                  <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="text-blue-500">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="font-bold text-slate-900">{unit.price}</span>
                <button className="text-sm font-semibold text-blue-700 hover:text-blue-900 underline">
                  View Floor Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Footer */}
      <section className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-200 text-center">
        <h3 className="text-xl font-bold mb-2 text-slate-900">Built for Longevity</h3>
        <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
          Our units utilize high-grade materials ensuring that your investment at 
          Perumnas Housing remains as robust as the day it was built.
        </p>
      </section>
    </main>
  );
}