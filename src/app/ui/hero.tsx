import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 bg-[url(/hero-bg.jpg)] bg-cover bg-center h-dvh">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full place-items-center">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            HM Consulting
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
            Citylofts Sudirman Building Level 28 #2825, Jl. KH. Mas Mansyur
            #121, Jakarta Pusat |
          </p>
          <div className="flex flex-wrap gap-2">
            <Button color="blue">
              Choose plan
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button color="light">Speak to Sales</Button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  );
};

export default HeroSection;
