import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat h-[500px]"
        style={{
          backgroundPosition: "50%",
          backgroundImage: "url('/images/more/6.jpeg')",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 md:text-5xl text-3xl font-bold">
                Would you like a Cup of Delicious Coffee?
              </h1>
              <p className="mb-8">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <button
                type="button"
                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ECEAE3]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
          <div className="px-4 py-8">
            <img src={"/images/icons/4.png"} alt="" />
            <h4 className=" text-xl pt-4 pb-2 font-semibold">
              Proper Roasting
            </h4>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
          <div className="px-4 py-8">
            <img src={"/images/icons/1.png"} alt="" />
            <h4 className=" text-xl pt-4 pb-2 font-semibold">Awesome Aroma</h4>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="px-4 py-8">
            <img src={"/images/icons/2.png"} alt="" />
            <h4 className=" text-xl pt-4 pb-2 font-semibold">High Quality</h4>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div className="px-4 py-8">
            <img src={"/images/icons/3.png"} alt="" />
            <h4 className=" text-xl pt-4 pb-2 font-semibold">Pure Grades</h4>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
