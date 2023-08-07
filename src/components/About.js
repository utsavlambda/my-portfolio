import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto px-10 py-20 md:flex md:flex-row-reverse items-center">
        <div className="md:w-1/2 flex flex-col items-center text-center">
          <img
            className="object-cover object-center w-80 h-80 rounded-full mb-8"
            alt="Utsav Talati"
            src="./utsav.jpg"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Hey, I'm Utsav!
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            A 4th-year Computer Science major at Vanderbilt University.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg font-medium text-white"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-lg text-lg font-medium"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          
        </div>
      </div>
    </section>
  );
};

export default About;
