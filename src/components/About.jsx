import React from "react";
import Dots from "./Dots";

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full p-8 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <Dots />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-8 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, nesciunt provident officiis omnis quaerat ullam!
                  Voluptatem obcaecati maxime quibusdam, animi, aliquam iste
                  minus ducimus iusto minima corrupti eos debitis! Maxime
                  dolorum omnis odio.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  amet itaque provident aliquid velit enim odio sed impedit et
                  repellat.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
