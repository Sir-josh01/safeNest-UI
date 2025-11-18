// import React from "react";
// import Image from "next/image";
// import NavBar from "@/app/components/NavBar";
// import Footer from "@/app/components/Footer";

// export default function page() {
//   return (
//     <>
//       <div>
//         <NavBar />
//         <main>
//           <div>
//             <Image
//               src="/dummy.jpg"
//               height={100}
//               width={100}
//               alt="hero-img"
//               className="hero-img"
//             />
//             <h2 className="heading">Most comfortable, most classy</h2>
//             <p>Make your living expeirnce more classy</p>
//           </div>

//           <section className="first-section mt-10">
//             <h1>Enjoy Quality Life in perumnas Housing</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
//               accusamus odio reprehenderit recusandae velit tenetur asperiores
//               debitis rerum alias dolor perspiciatis molestias vitae veritatis
//               quae nostrum dignissimos possimus, a vel! Cum blanditiis sequi
//               excepturi, corrupti provident incidunt nulla commodi quas aperiam
//               odio dicta vero rem modi ad illum eum tenetur!
//             </p>
//           </section>

//           <section className="flex mt-10">
//             <div>
//               <h1>+100</h1>
//               <p>Units</p>
//             </div>

//             <div>
//               <h1>+100</h1>
//               <p>Units</p>
//             </div>

//             <div>
//               <h1>+100</h1>
//               <p>Units</p>
//             </div>
//           </section>

//           <section className="mt-10">
//             <div className="image-display flex">
//               <Image
//                 src="/dummy.jpg"
//                 width={100}
//                 height={100}
//                 alt="display-img"
//               />

//               <Image
//                 src="/dummy.jpg"
//                 width={100}
//                 height={100}
//                 alt="display-img"
//               />

//               <Image
//                 src="/dummy.jpg"
//                 width={100}
//                 height={100}
//                 alt="display-img"
//               />
//             </div>
//           </section>

//           <section className="mt-10">
//             <h1>Strategic Location</h1>
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
//               veritatis a quod mollitia aliquid illo eaque quisquam fugiat,
//               consequatur voluptates exercitationem saepe nam quo reiciendis
//               neque, velit dolorem nemo quaerat, atque libero quos suscipit.
//               Consequuntur sint, est aspernatur tempore voluptatum ex quod
//               labore, reiciendis laboriosam vero in. Id, dignissimos
//               repellendus?
//             </p>
//           </section>

//           <section className="mt-10">
//             <h1>Modern Design</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
//               at. Facere consequatur officiis eos doloremque asperiores
//               inventore est distinctio architecto incidunt. Reiciendis expedita
//               eius esse natus temporibus totam provident possimus.
//             </p>
//           </section>

//           <section className="mt-15">
//             <h1>Find your Dream Home</h1>
//             <p className="mt-8">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Obcaecati, totam aliquam ab laboriosam mollitia, ad aspernatur
//               iure doloremque modi blanditiis quaerat neque illo temporibus
//               ipsum, asperiores reiciendis suscipit ullam repellat!
//             </p>

//             <aside className="image-display mt-10">
//               <div>
//                 <Image
//                   src="/dummy.jpg"
//                   width={100}
//                   height={100}
//                   alt="display-img"
//                 />
//               </div>
//             </aside>
//           </section>

//           <section className="mt-10">
//             <h1>Frrequently Asked Questions</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
//               quod.
//             </p>
//           </section>

//           <section className="questions mt-15">
//             <div className="quest-ans-box border p-3">
//               <div className="flex justify-between">
//                 <p className="quest">What is safeNest ?</p>
//                 <span>-</span>
//               </div>
//               <p className="ans">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
//                 nam.
//               </p>
//             </div>
//             <div className="quest-ans-box border">
//               <div className="flex justify-between">
//                 <p className="quest">What is safeNest ?</p>
//                 <span>+</span>
//               </div>
//               <p className="ans">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
//                 nam.
//               </p>
//             </div>
//             <div className="quest-ans-box border">
//               <div className="flex justify-between">
//                 <p className="quest">What is safeNest ?</p>
//                 <span>+</span>
//               </div>
//               <p className="ans">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
//                 nam.
//               </p>
//             </div>
//             <div className="quest-ans-box border">
//               <div className="flex justify-between">
//                 <p className="quest">What is safeNest ?</p>
//                 <span>+</span>
//               </div>
//               <p className="ans">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
//                 nam.
//               </p>
//             </div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// }


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
              src="/dummy.jpg"
              alt="hero-img"
              className="object-cover hero-img"
              priority 
              fill 
            />
            
            {/* HEADING: */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white heading drop-shadow-lg">
                Most comfortable, most classy
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-white font-medium drop-shadow-md">
                Make your living experience more classy
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                accusamus odio reprehenderit recusandae velit tenetur asperiores
                debitis rerum alias dolor perspiciatis molestias vitae veritatis
                quae nostrum dignissimos possimus, a vel! Cum blanditiis sequi
                excepturi, corrupti provident incidunt nulla commodi quas aperiam
                odio dicta vero rem modi ad illum eum tenetur!
              </p>
            </section>

            <hr className="my-10 border-gray-200" />
            
            {/* STATS SECTION: Flex layout for statistics */}
            <section className="flex flex-col md:flex-row justify-around items-center py-8 text-center">
              {/* Stat Card 1 */}
              <div className="p-4">
                <h3 className="text-5xl font-extrabold text-indigo-600">+100</h3>
                <p className="text-xl text-gray-500 mt-1">Units</p>
              </div>

              {/* Stat Card 2 */}
              <div className="p-4">
                <h3 className="text-5xl font-extrabold text-indigo-600">+100</h3>
                <p className="text-xl text-gray-500 mt-1">Units</p>
              </div>

              {/* Stat Card 3 */}
              <div className="p-4">
                <h3 className="text-5xl font-extrabold text-indigo-600">+100</h3>
                <p className="text-xl text-gray-500 mt-1">Units</p>
              </div>
            </section>

            <hr className="my-10 border-gray-200" />

            {/* IMAGE GALLERY SECTION */}
            <section className="mt-10">
              <div className="image-display flex flex-wrap justify-center gap-4">
                {/* Image 1 */}
                <div className="w-full sm:w-1/3 h-64 relative shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src="/dummy.jpg"
                    alt="display-img"
                    className="object-cover"
                    fill
                  />
                </div>
                {/* Image 2 */}
                <div className="w-full sm:w-1/3 h-64 relative shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src="/dummy.jpg"
                    alt="display-img"
                    className="object-cover"
                    fill
                  />
                </div>
                {/* Image 3 */}
                <div className="w-full sm:w-1/3 h-64 relative shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src="/dummy.jpg"
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                veritatis a quod mollitia aliquid illo eaque quisquam fugiat,
                consequatur voluptates exercitationem saepe nam quo reiciendis
                neque, velit dolorem nemo quaerat, atque libero quos suscipit.
                Consequuntur sint, est aspernatur tempore voluptatum ex quod
                labore, reiciendis laboriosam vero in. Id, dignissimos
                repellendus?
              </p>
            </section>

            {/* MODERN DESIGN SECTION */}
            <section className="mt-20 max-w-4xl mx-auto">
              <h2 className="section-heading">Modern Design</h2>
              <p className="section-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                at. Facere consequatur officiis eos doloremque asperiores
                inventore est distinctio architecto incidunt. Reiciendis expedita
                eius esse natus temporibus totam provident possimus.
              </p>
            </section>

            {/* FIND YOUR DREAM HOME SECTION */}
            <section className="mt-20 py-10 max-w-4xl mx-auto">
              <h2 className="section-heading">Find your Dream Home</h2>
              <p className="section-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, totam aliquam ab laboriosam mollitia, ad aspernatur
                iure doloremque modi blanditiis quaerat neque illo temporibus
                ipsum, asperiores reiciendis suscipit ullam repellat!
              </p>

              <aside className="image-display mt-10">
                {/* Large Aside Image */}
                <div className="w-full h-80 relative shadow-xl rounded-lg overflow-hidden">
                  <Image
                    src="/dummy.jpg"
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                quod.
              </p>
            </section>

            {/* FAQ ITEMS */}
            <section className="questions mt-10 max-w-3xl mx-auto pb-20 space-y-4">
              {[
                { quest: "What is safeNest ?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nam.", open: true },
                { quest: "What are the payment options?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nam.", open: false },
                { quest: "Is the location strategic?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nam.", open: false },
                { quest: "What is the completion timeline?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nam.", open: false },
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