import React from "react";

export default function Header({
  setIsLoggedIn,
  isLoggedIn,
  onMaisonsClick,
  isDarkMode,
  favoritesCount,
  filter,
  handleFilterChange,
}) {
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header
      className={`py-4 px-6 flex justify-between items-center shadow-md shadow-gray-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-xl font-bold text-red-500">Airbed & Breakfast</div>

      {isLoggedIn && (
        <div className="flex-grow flex justify-center">
          <input
            type="text"
            placeholder="Filtrer par ville"
            value={filter}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md p-2 w-1/2"
          />
        </div>
      )}

      <div className="flex items-center">
        {isLoggedIn && (
          <nav className="md:block">
            <ul className="flex space-x-4">
              <li
                className={`hover:text-black cursor-pointer ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
                onClick={onMaisonsClick}
              >
                Maisons
              </li>
              <li
                className={`hover:text-black ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
              >
                <a href="#">Appartement</a>
              </li>
              <li
                className={`hover:text-black ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
              >
                <a href="#">Villas</a>
              </li>
              {favoritesCount > 0 && (
                <li
                  className={`hover:text-black ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  <a href="#">Favoris ({favoritesCount})</a>
                </li>
              )}
            </ul>
          </nav>
        )}
        <button
          className={`font-bold py-2 px-2 rounded ml-4 ${
            isDarkMode
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
          onClick={toggleLogin}
        >
          {isLoggedIn ? "Déconnexion" : "Connexion"}
        </button>
      </div>
    </header>
  );
}
