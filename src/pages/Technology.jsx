import React from 'react'
import { useParams, NavLink, Navigate } from 'react-router-dom';
import data from '../data.json';

const Technology = () => {
  
  const { technology } = useParams();

  // 2. Find the technology item using the 'id' field
  const currentTech = data.technology.find(
    (tech) => tech.id === technology
  );

  // 3. Fallback redirect if the URL doesn't match any ID
  if (!currentTech) {
    // Redirects to the first item (Launch vehicle) by default
    return <Navigate to={`/technology/${data.technology[0].id}`} replace />;
  }

  return (
    <section className="flex flex-col w-full mx-auto pt-8 md:pt-12 lg:pt-24 pb-0 h-full flex-grow">
      
      {/* Page Title (Aligned to the grid on desktop, centered on mobile/tablet) */}
      <div className="w-full text-center md:text-left px-6 md:px-10 lg:px-32 mb-8 md:mb-16 lg:mb-6">
        <h1 className="text-white text-base md:text-xl lg:text-3xl font-sans tracking-[0.15em] uppercase">
          <span className="text-gray-500 font-bold mr-4">03</span> Space launch 101
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full flex-grow h-full">
        
        <div className="w-full lg:w-[40%] flex justify-end order-1 lg:order-2 mb-8 md:mb-14 lg:mb-0">
          <picture className="w-full lg:w-auto">
            {/* On screens lg (1024px) and larger, use the portrait image */}
            <source media="(min-width: 1024px)" srcSet={currentTech.images.portrait} />
            {/* On smaller screens, default to the landscape image */}
            <img 
              src={currentTech.images.landscape} 
              alt={currentTech.name} 
              className="w-full h-[170px] md:h-[310px] lg:h-[527px] object-cover animate-fade-in"
            />
          </picture>
        </div>

        {/* LEFT SIDE (Desktop) / BOTTOM (Mobile): Nav & Text Content */}
        <div className="w-full lg:w-[60%] flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left order-2 lg:order-1 px-6 lg:px-0 lg:pl-32">
          
          {/* Numbered Navigation Buttons */}
          <nav className="flex flex-row lg:flex-col gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-0 lg:mr-16">
            {data.technology.map((tech, index) => (
              <NavLink
                key={tech.id}
                to={`/technology/${tech.id}`}
                className={({ isActive }) =>
                  `w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center font-serif text-base md:text-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-white border-white/25 hover:border-white'
                  }`
                }
              >
                {/* Dynamically generate numbers 1, 2, 3 based on array index */}
                {index + 1}
              </NavLink>
            ))}
          </nav>

        <div className="max-w-md lg:max-w-[470px] pb-12 lg:pb-0">
            <h3 className="text-[#D0D6F9] text-sm md:text-base font-sans tracking-widest uppercase mb-2 md:mb-4">
              The terminology...
            </h3>
            <h2 className="text-white text-2xl md:text-[40px] lg:text-[56px] font-serif uppercase mb-4 md:mb-6 leading-tight">
              {currentTech.name}
            </h2>
            <p className="text-[#D0D6F9] text-[15px] md:text-base lg:text-lg font-sans leading-relaxed md:min-h-[160px]">
              {currentTech.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Technology
