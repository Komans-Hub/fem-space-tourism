import React from 'react'
import { useParams, NavLink, Navigate } from 'react-router-dom';
import data from '../data.json';

const Destination = () => {

  const { place } = useParams();

  // Find the destination using the new 'id' field
  const currentDestination = data.destinations.find(
    (dest) => dest.id === place
  );
 
  // Fallback redirect if the URL doesn't match any ID
  if (!currentDestination) {
    return <Navigate to="/destination/moon" replace />;
  }

  return (
    <section className="flex flex-col items-center w-full max-w-6xl mx-auto px-6 pt-8 md:pt-12 lg:pt-24 pb-12 h-full flex-grow">
      
      {/* Page Title */}
      <div className="w-full text-center md:text-left mb-8 md:mb-16 lg:mb-24">
        <h1 className="text-white text-base md:text-xl lg:text-3xl font-sans tracking-[0.15em] uppercase">
          <span className="text-gray-500 font-bold mr-4">01</span> Pick your destination
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:px-8">
        
        {/* Left Side: Planet Image (Using picture tag for webp optimization) */}
        <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <picture>
            <source srcSet={currentDestination.images.webp} type="image/webp" />
            <img 
              src={currentDestination.images.png} 
              alt={currentDestination.name} 
              className="w-44 h-44 md:w-72 md:h-72 lg:w-[445px] lg:h-[445px] object-contain"
            />
          </picture>
        </div>

        {/* Right Side: Content & Tabs */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-20">
          
          {/* Dynamic Navigation Tabs */}
          <nav className="flex gap-6 md:gap-8 mb-8 md:mb-10">
            {data.destinations.map((dest) => (
              <NavLink
                key={dest.id}
                to={`/destination/${dest.id}`}
                className={({ isActive }) =>
                  `uppercase font-sans tracking-widest text-sm md:text-base pb-3 border-b-4 transition-colors ${
                    isActive 
                      ? 'border-white text-white' 
                      : 'border-transparent text-[#D0D6F9] hover:border-gray-500'
                  }`
                }
              >
                {dest.name}
              </NavLink>
            ))}
          </nav>

          {/* Planet Details */}
          <div className="w-full max-w-md lg:max-w-none">
            <h2 className="text-white text-[56px] md:text-[80px] lg:text-[100px] font-serif uppercase mb-2 lg:mb-4 leading-none">
              {currentDestination.name}
            </h2>
            
            <p className="text-[#D0D6F9] text-[15px] md:text-base lg:text-lg font-sans leading-relaxed mb-8 md:mb-12 border-b border-[#383B4B] pb-8 md:pb-12 min-h-[120px]">
              {currentDestination.description}
            </p>
            
            {/* Distance & Travel Time */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full uppercase font-sans">
              <div className="flex flex-col">
                <p className="text-[#D0D6F9] text-sm tracking-widest mb-3">
                  Avg. distance
                </p>
                <p className="text-white text-3xl font-serif uppercase">
                  {currentDestination.distance}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#D0D6F9] text-sm tracking-widest mb-3">
                  Est. travel time
                </p>
                <p className="text-white text-3xl font-serif uppercase">
                  {currentDestination.travel}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Destination
