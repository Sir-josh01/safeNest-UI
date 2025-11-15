import React from "react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function page() {
  return (
    <>
      <div>
        <NavBar />
        <main>
          <div>
            <Image
              src="/dummy.jpg"
              height={100}
              width={100}
              alt="hero-img"
              className="hero-img"
            />
          </div>

          <section className="mt-10">
            <h1>Enjoy Quality Life in perumnas Housing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              accusamus odio reprehenderit recusandae velit tenetur asperiores
              debitis rerum alias dolor perspiciatis molestias vitae veritatis
              quae nostrum dignissimos possimus, a vel! Cum blanditiis sequi
              excepturi, corrupti provident incidunt nulla commodi quas aperiam
              odio dicta vero rem modi ad illum eum tenetur!
            </p>
          </section>

          <section className="flex mt-10">
            <div>
              <h1>+100</h1>
              <p>Units</p>
            </div>

            <div>
              <h1>+100</h1>
              <p>Units</p>
            </div>

            <div>
              <h1>+100</h1>
              <p>Units</p>
            </div>
          </section>

          <section className="mt-10">
            <div className="image-display flex">
              <Image
                src="/dummy.jpg"
                width={100}
                height={100}
                alt="display-img"
              />

              <Image
                src="/dummy.jpg"
                width={100}
                height={100}
                alt="display-img"
              />

              <Image
                src="/dummy.jpg"
                width={100}
                height={100}
                alt="display-img"
              />
            </div>
          </section>

          <section className="mt-10">
            <h1>Strategic Location</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              veritatis a quod mollitia aliquid illo eaque quisquam fugiat,
              consequatur voluptates exercitationem saepe nam quo reiciendis
              neque, velit dolorem nemo quaerat, atque libero quos suscipit.
              Consequuntur sint, est aspernatur tempore voluptatum ex quod
              labore, reiciendis laboriosam vero in. Id, dignissimos
              repellendus?
            </p>
          </section>

          <section className="mt-10">
            <h1>Modern Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              at. Facere consequatur officiis eos doloremque asperiores
              inventore est distinctio architecto incidunt. Reiciendis expedita
              eius esse natus temporibus totam provident possimus.
            </p>
          </section>

          <section className="mt-15">
            <h1>Find your Dream Home</h1>
            <p className="mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, totam aliquam ab laboriosam mollitia, ad aspernatur
              iure doloremque modi blanditiis quaerat neque illo temporibus
              ipsum, asperiores reiciendis suscipit ullam repellat!
            </p>

            <aside className="image-display mt-10">
              <div>
                <Image
                  src="/dummy.jpg"
                  width={100}
                  height={100}
                  alt="display-img"
                />
              </div>
            </aside>
          </section>

          <section className="mt-10">
            <h1>Frrequently Asked Questions</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
              quod.
            </p>
          </section>

          <section className="questions mt-15">
            <div className="quest-ans-box border p-3">
              <div className="flex justify-between">
                <p className="quest">What is safeNest ?</p>
                <span>-</span>
              </div>
              <p className="ans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                nam.
              </p>
            </div>
            <div className="quest-ans-box border">
              <div className="flex justify-between">
                <p className="quest">What is safeNest ?</p>
                <span>+</span>
              </div>
              <p className="ans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                nam.
              </p>
            </div>
            <div className="quest-ans-box border">
              <div className="flex justify-between">
                <p className="quest">What is safeNest ?</p>
                <span>+</span>
              </div>
              <p className="ans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                nam.
              </p>
            </div>
            <div className="quest-ans-box border">
              <div className="flex justify-between">
                <p className="quest">What is safeNest ?</p>
                <span>+</span>
              </div>
              <p className="ans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                nam.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
