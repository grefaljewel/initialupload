import React from "react";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#898988", fontFamily: 'Century Gothic, sans-serif' }}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jewel.
            <br className="hidden lg:inline-block" />Transforming ideas into beautiful, user-friendly websites
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            I'm a passionate web designer with a knack for crafting visually striking and functional websites. My mission is to bring your vision to life through innovative design, seamless user experiences, and clean, efficient code.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/405998925_1738856613204661_5323101862646551113_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH94ltQS3QHVRc6ya69rT73OLjRyJ8uyIM4uNHIny7Ig0t35i62_Wo7H1ZNtC_Ijt3tHdOMPkz6mivRjnGTM5_S&_nc_ohc=UOWkmPRg-ZoQ7kNvgE0c4BR&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AKCJ6QPe9Tg3uKtzSSEwGJy&oh=00_AYAs5DfvVP8LC1MwoRfRgNxzdb3tEDBP1eg8wdFfjXQ4Tw&oe=67487A7D"
          />
        </div>
      </div>
    </section>
  );
}
