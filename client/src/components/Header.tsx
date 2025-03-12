export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-pokered">Pokémon Explorer</h1>
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-pokered"></div>
          <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300"></div>
        </div>
      </div>
      <p className="text-gray-600 mt-2">Discover Pokémon and their abilities</p>
    </header>
  );
}
