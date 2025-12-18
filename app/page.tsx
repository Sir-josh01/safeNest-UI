
import React from "react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Accordion from '@/app/components/Accordion'

export default function Page() {
  return (
    <>
      <div>
      
        <NavBar /> 
        <main>
          {/* HERO SECTION*/}
          <div className="relative w-full h-[500px] mb-10"> 
            <Image
              src="/img-01.jpg"
              alt="hero-img"
              className="object-cover hero-img"
              priority 
              fill 
            />
            
            {/* HEADING: */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-grey-500 heading drop-shadow-lg">
                {/* Most comfortable, most classy */}
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-white font-medium drop-shadow-md">
                {/* Make your living experience more classy */}
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4">
            {/* FIRST SECTION: Content with padding and margin */}
            <section className="first-section pt-10 pb-10 max-w-4xl mx-auto"> 
              <h2 className="section-heading">
                Enjoy Quality Life in Perumnas Housing
              </h2>
              <p className="section-paragraph">
                SafeNest, proudly situated within Perumnas Housing, is designed for those who seek comfort, security, and exceptional value. We don&apos;t just build houses; we curate thriving communities where every detail, from the robust construction to the tranquil green spaces, supports a premium living experience. Discover a place where peace of mind and modern convenience meet seamlessly.
              </p>
            </section>

            <hr className="my-10 border-gray-200" />
            
            {/* STATS SECTION: Flex layout for statistics */}
            <section className="flex flex-col md:flex-row justify-around items-center py-8 text-center">
              {/* Stat Card 1 */}
              <div className="p-4">
                <h3 className="text-5xl font-extrabold text-indigo-600">+100</h3>
                <p className="text-xl text-gray-500 mt-1">Units Sold</p>
              </div>

              {/* Stat Card 2 */}
              <div className="p-4"> 
                <h3 className="text-5xl font-extrabold text-indigo-600">+5</h3>
                <p className="text-xl text-gray-500 mt-1">Years of Experience</p>
              </div>

              {/* Stat Card 3 */}
              <div className="p-4">
                <h3 className="text-5xl font-extrabold text-indigo-600">98%</h3>
                <p className="text-xl text-gray-500 mt-1">Client Satisfaction</p>
              </div>
            </section>

            <hr className="my-10 border-gray-200" />

            {/* IMAGE GALLERY SECTION */}
            <section className="mt-10">
              <div className="image-display flex flex-wrap justify-center gap-4">
                {/* Image 1 */}
                <div className="w-full sm:w-1/3 h-64 relative shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src="/img-02.jpg"
                    alt="display-img"
                    className="object-cover"
                    fill
                  />
                </div>
                {/* Image 2 */}
                <div className="w-full sm:w-1/3 h-64 relative shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src="/img-03.jpg"
                    alt="display-img"
                    className="object-cover"
                    fill
                  />
                </div>
                {/* Image 3 */}
                <div className="w-full sm:w-1/3 h-64 relative shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src="/img-01.jpg"
                    alt="display-img"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </section>
            
            {/* STRATEGIC LOCATION SECTION */}
            <section className="mt-20 max-w-4xl mx-auto">
              <h2 className="section-heading">Strategic Location</h2>
              <p className="section-paragraph">
               Location is everything. SafeNest offers unparalleled connectivity, placing you minutes away from central business districts, reputable schools, and major health facilities. Enjoy the convenience of easy access to major highways while returning to a quiet, secure, and family-friendly environment away from the city&apos;s noise. Your commute is streamlined, giving you more time for life.
              </p>
            </section>

            {/* MODERN DESIGN SECTION */}
            <section className="mt-20 max-w-4xl mx-auto">
              <h2 className="section-heading">Modern Design</h2>
              <p className="section-paragraph">
                Our units feature contemporary open-concept layouts, high-end finishes, and intelligent space utilization to maximize natural light and flow. From designer kitchens to spacious master suites, every residence is built with premium materials and a focus on long-term durability and aesthetic appeal, ensuring your home is both beautiful and functional for years to come.
              </p>
            </section>

            {/* FIND YOUR DREAM HOME SECTION */}
            <section className="mt-20 py-10 max-w-4xl mx-auto">
              <h2 className="section-heading">Find your Dream Home</h2>
              <p className="section-paragraph">
                The journey to your perfect home starts here. Explore our varied floor plans, envision your future in a secure community, and take the first step toward ownership. Our dedicated sales team is ready to guide you through the process, from initial inquiry to final key handover. Your dream home isn&apos;t just a possibility—it&apos;s waiting for you.
              </p>

              <aside className="image-display mt-10">
                {/* Large Aside Image */}
                <div className="w-full h-80 relative shadow-xl rounded-lg overflow-hidden">
                  <Image
                    src="/img-02.jpg"
                    alt="display-img"
                    className="object-cover"
                    fill
                  />
                </div>
              </aside>
            </section>

            {/* FAQ SECTION INTRO */}
            <section className="mt-20 max-w-4xl mx-auto text-center">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="section-paragraph">
               Find quick answers to common questions about ownership, financing, and life at SafeNest. If you need more detail, our contact team is ready to assist.
              </p>
            </section>

            {/* FAQ ITEMS */}
            <section className="questions mt-10 max-w-3xl mx-auto pb-20 space-y-4">
              {[
               { quest: "What is SafeNest?", ans: "SafeNest is a premium residential community offering modern, secure, and strategically located homes within the reputable Perumnas Housing estate, designed for quality family living.", open: true },
                { quest: "What are the payment options?", ans: "We offer flexible payment plans, including full payment with a discount, milestone-based installment plans over 12 months, and assistance with pre-approved mortgage financing from partner banks.", open: false },
                { quest: "Is the location strategic?", ans: "Absolutely. SafeNest is ideally located to offer easy access to major city centers, airports, top educational institutions, and healthcare providers, balancing convenience with residential tranquility.", open: false },
                { quest: "What is the completion timeline?", ans: "For ready-to-move units, handover is immediate upon final payment. For off-plan purchases, construction and completion typically range from 6 to 9 months, depending on the unit type.", open: false },
              ].map((item, index) => (
                <Accordion 
                  key={index}
                  question={item.quest}
                  answer={item.ans}
                />
              ))}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}