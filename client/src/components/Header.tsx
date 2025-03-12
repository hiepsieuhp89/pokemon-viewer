export default function Header() {
  return (
    <header className="mb-12 relative">
      {/* Background magic */}
      <div className="absolute inset-0 bg-gradient-to-r from-pokered/10 via-pokeblue/10 to-pokeyellow/10 rounded-xl backdrop-blur-sm -z-10"></div>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-pokered/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-pokeblue/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-pokeyellow/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Magic sparkles */}
      <div className="absolute h-full w-full overflow-hidden pointer-events-none -z-5">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-yellow-300 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Header content */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 rounded-lg">
        <div className="mb-6 md:mb-0 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold relative z-10">
            <span className="bg-gradient-to-r from-pokered via-purple-600 to-pokeblue bg-clip-text text-transparent">
              Pokémon Explorer
            </span>
          </h1>
          {/* Magical underline */}
          <div className="absolute -bottom-1 left-0 h-1 w-3/4 bg-gradient-to-r from-pokered via-pokeyellow to-pokeblue rounded-full"></div>
          <p className="text-pokedark/70 mt-3 text-lg md:text-xl font-medium">
            Discover magical Pokémon and their special abilities
          </p>
        </div>
        
        {/* Animated Pokéballs */}
        <div className="flex items-center space-x-5 relative">
          {/* Red pokeball */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pokered to-red-400 shadow-lg animate-[float_4s_ease-in-out_infinite] relative z-10">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-[45%] left-0 w-full h-[10%] bg-white/90"></div>
                <div className="absolute top-[43%] left-[43%] w-[14%] h-[14%] rounded-full bg-white border-[3px] border-gray-200 z-20"></div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-pokered/30 rounded-full blur-md -z-0"></div>
          </div>
          
          {/* Yellow pokeball */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pokeyellow to-amber-400 shadow-lg animate-[float_3s_ease-in-out_infinite_0.5s] relative z-10">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-[45%] left-0 w-full h-[10%] bg-white/90"></div>
                <div className="absolute top-[43%] left-[43%] w-[14%] h-[14%] rounded-full bg-white border-[3px] border-gray-200 z-20"></div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-pokeyellow/30 rounded-full blur-md -z-0"></div>
          </div>
          
          {/* Blue pokeball */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pokeblue to-blue-400 shadow-lg animate-[float_4.5s_ease-in-out_infinite_1s] relative z-10">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-[45%] left-0 w-full h-[10%] bg-white/90"></div>
                <div className="absolute top-[43%] left-[43%] w-[14%] h-[14%] rounded-full bg-white border-[3px] border-gray-200 z-20"></div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-pokeblue/30 rounded-full blur-md -z-0"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
