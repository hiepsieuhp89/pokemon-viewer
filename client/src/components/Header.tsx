export default function Header() {
  return (
    <header className="mb-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pokered via-pokeblue to-pokeyellow opacity-10 rounded-lg -z-10"></div>
      <div className="flex flex-col md:flex-row justify-between items-center p-8 rounded-lg">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-pokered to-pokeblue bg-clip-text text-transparent">
              Pokémon Explorer
            </span>
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Discover Pokémon and their unique abilities</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-pokered shadow-lg animate-pulse"></div>
          <div className="w-16 h-16 rounded-full bg-pokeyellow shadow-lg"></div>
          <div className="w-12 h-12 rounded-full bg-pokeblue shadow-lg animate-pulse"></div>
        </div>
      </div>
    </header>
  );
}
