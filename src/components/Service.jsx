import { transform } from "motion/react";
import React from "react";
import drash from "../assets/darsh.png"

const Service = () => {
  return (
    <section className="pb-12 pt-20 relative dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-violet-600">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-white font-delius sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-lg text-white">
                At Darsh Creatives, we envision a world where technology and
                creativity seamlessly merge to enrich lives and inspire minds.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="OTT Platform"
            details="Our cutting-edge OTT platform offers a diverse array of high-quality content, from blockbuster movies to binge-worthy series, catering to audiences with varied tastes."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  fill="white"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6l0 64c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64l0-64c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192l0-64z"
                />
              </svg>
            }
          />
          <ServiceCard
            title="Production House"
            details="Shortly Darsh Creatives shall take the pride in producing captivating and original content. Our production house would be a hub of creativity."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="white"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM160 128l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L192 96c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0z"
                />
              </svg>
            }
          />
          <ServiceCard
            title="EduTech Platform"
            details="In the realm of education, Darsh Creatives is dedicated to empowering learners through our innovative AI driven EduTech platform."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 512">
                <path
                  fill="white"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-3  md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] bg-blue-600 w-[70px] items-center justify-center rounded-2xl p-4">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
