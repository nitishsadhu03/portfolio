import { CalendarCheck, Milestone } from "lucide-react";
import React from "react";

const Experince = () => {
  return (
    <section
      id="experince"
      className="flex flex-col justify-center items-center gap-10 h-full py-16 bg-off-white"
    >
      <div className="flex gap-3 items-center">
        <CalendarCheck size={52} className="text-primary" />
        <h1 className="text-3xl lg:text-5xl font-bold text-secondary">
          Experince
        </h1>
      </div>

      <ol className="relative border-gray-600 border-s-2 mx-6">
        <li className="mb-10 ms-6 bg-white p-6 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-auto transition-transform duration-500 hover:scale-90 ease-in-out">
          <div className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white">
            <CalendarCheck className="text-primary" />
          </div>
          <time className="block mb-2 text-xs lg:text-sm font-semibold leading-none text-secondary">
            April 2024 - July 2024
          </time>
          <h3 className="flex items-center text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
            Frontend Developer Intern
          </h3>
          <p className="mb-3 text-black font-medium text-sm lg:text-lg">BridgeYu</p>
          <p className="mb-2 text-xs lg:text-base font-normal text-black/80 flex gap-2 ">
            <Milestone size={20} className="text-secondary hidden lg:flex" />
            <span className="text-lg font-bold lg:hidden">•</span>
            <span>
              Worked as one of the founding engineers and implemented key
              features and developed complex UI components.
            </span>
          </p>
          <p className="mb-2 text-xs lg:text-base font-normal text-black/80 flex gap-2 ">
            <Milestone size={20} className="text-secondary hidden lg:flex" />
            <span className="text-lg font-bold lg:hidden">•</span>
            <span>
              Collaborated with the backend team to integrate APIs, ensuring
              seamless data flow and optimal application functionality through
              agile development practices.
            </span>
          </p>
          <p className="mb-4 text-xs lg:text-base font-normal text-black/80 flex gap-2 ">
            <Milestone size={20} className="text-secondary hidden lg:flex" />
            <span className="text-lg font-bold lg:hidden">•</span>
            <span>
              Fixed pre-existing bugs and optimized code for improved
              performance and stability
            </span>
          </p>
        </li>
      </ol>
    </section>
  );
};

export default Experince;
