import React from 'react';

export const metadata = {
  title: "About | SafeNest",
  description: "Experience premium living at SafeNest within Perumnas Housing.",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-slate-800">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          More Than Just a Home.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Proudly situated within <strong>Perumnas Housing</strong>, SafeNest is where 
          robust construction meets tranquil living.
        </p>
      </section>

      {/* Core Value Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-3 text-blue-700">Exceptional Value</h3>
          <p className="text-sm text-slate-600">
            We curate thriving communities where every detail is designed to support 
            a premium living experience without compromise.
          </p>
        </div>

        <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-3 text-blue-700">Robust Construction</h3>
          <p className="text-sm text-slate-600">
            Peace of mind starts with the foundation. Our builds prioritize 
            safety, durability, and modern architectural standards.
          </p>
        </div>

        <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-3 text-blue-700">Tranquil Spaces</h3>
          <p className="text-sm text-slate-600">
            Designed for comfort, our green spaces provide a serene escape from 
            the hustle, fostering a healthy and peaceful community.
          </p>
        </div>
      </section>

      {/* Visual Component Tag */}
      

      {/* The Perumnas Connection */}
      <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">The Perumnas Advantage</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            By situating SafeNest within Perumnas Housing, we offer residents the 
            perfect blend of established community infrastructure and contemporary 
            living standards. 
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-semibold uppercase tracking-widest">Security</span>
            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-semibold uppercase tracking-widest">Community</span>
            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-semibold uppercase tracking-widest">Value</span>
          </div>
        </div>
        <div className="flex-1 text-center border-l border-slate-700 pl-6">
          <p className="text-5xl font-light italic opacity-80">&quot;Discover a place where peace of mind and modern convenience meet.&quot;</p>
        </div>
      </section>
    </main>
  );
}