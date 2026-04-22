import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-16 pt-12 lg:pt-32 pb-12 lg:pb-32 flex-grow h-full mt-50 ">
      
      {/* Left Content Column */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 md:max-w-md lg:max-w-lg">
        <p className="text-[#D0D6F9] text-base md:text-xl lg:text-2xl font-sans tracking-[0.15em] mb-4 md:mb-6 uppercase">
          So, you want to travel to
        </p>
        
        <h1 className="text-white text-[80px] md:text-[120px] font-serif leading-none mb-6 lg:mb-10 uppercase">
          Space
        </h1>
        
        <p className="text-[#D0D6F9] text-base md:text-lg leading-relaxed font-sans">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      {/* Right Content Column (Explore Button) */}
      <div className="mt-20 lg:mt-auto flex items-center justify-center w-full lg:w-1/2 lg:justify-end">
        <Link 
          to="/destination"
          className="bg-white text-[#0B0D17] w-36 h-36 md:w-60 md:h-60 rounded-full text-xl md:text-3xl font-serif tracking-widest uppercase flex items-center justify-center transition-all duration-500 hover:ring-[40px] md:hover:ring-[88px] ring-white/10"
        >
          Explore
        </Link>
      </div>

    </section>
  )
}

export default Home
