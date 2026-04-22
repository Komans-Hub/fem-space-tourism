import React from 'react'
import { useParams, NavLink, Navigate } from 'react-router-dom';
import data from '../data.json';


const Crew = () => {

  const { person } = useParams();

  // 2. Find the crew member using the 'id' field
  const currentCrew = data.crew.find(
    (member) => member.id === person
  );

  // 3. Fallback redirect if the URL doesn't match any ID
  if (!currentCrew) {
    // Redirects to the first crew member (Douglas Hurley) by default
    return <Navigate to={`/crew/${data.crew[0].id}`} replace />;
  }
  
  return (
    <section className="flex flex-col items-center w-full max-w-6xl mx-auto px-6 pt-8 md:pt-12 lg:pt-24 pb-0 h-full flex-grow">
      
      {/* Page Title */}
      <div className="w-full text-center md:text-left mb-8 md:mb-16 lg:mb-0">
        <h1 className="text-white text-base md:text-xl lg:text-3xl font-sans tracking-[0.15em] uppercase">
          <span className="text-gray-500 font-bold mr-4">02</span> Meet your crew
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full flex-grow h-full lg:px-8">
        
        {/* Left Side: Content & Dots Navigation */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 md:mt-0 pb-12 lg:pb-24">
          
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-24 lg:mt-32">
            <h3 className="text-white/50 text-lg md:text-2xl lg:text-[32px] font-serif uppercase mb-2 md:mb-4">
              {currentCrew.role}
            </h3>
            <h2 className="text-white text-2xl md:text-[40px] lg:text-[56px] font-serif uppercase mb-4 md:mb-6 leading-none">
              {currentCrew.name}
            </h2>
            <p className="text-[#D0D6F9] text-[15px] md:text-base lg:text-lg font-sans leading-relaxed max-w-md lg:max-w-lg md:min-h-[160px] lg:min-h-[180px]">
              {currentCrew.bio}
            </p>
          </div>

          {/* Dot Navigation */}
          <nav className="flex gap-4 md:gap-6">
            {data.crew.map((member) => (
              <NavLink
                key={member.id}
                to={`/crew/${member.id}`}
                className={({ isActive }) =>
                  `w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-white' 
                      : 'bg-white/15 hover:bg-white/50'
                  }`
                }
                aria-label={`View profile of ${member.name}`}
              />
            ))}
          </nav>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end h-full order-1 lg:order-2 border-b border-[#383B4B] md:border-none">
          <picture>
            <source srcSet={currentCrew.images.webp} type="image/webp" />
            <img 
              src={currentCrew.images.png} 
              alt={currentCrew.name} 
              className="h-[340px] md:h-[532px] lg:h-[700px] w-auto object-contain origin-bottom"
            />
          </picture>
        </div>

      </div>
    </section>
  )
}

export default Crew
