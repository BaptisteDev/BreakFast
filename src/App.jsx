import Header from "./components/Header";
import Logement from "./components/Logement";
import Avis from "./components/Avis";
import Footer from "./components/Footer";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favoriteList, setFavoriteList] = useState([]);
  const [filter, setFilter] = useState("");

  const handleMaisonsClick = () => {
    setIsReversed(!isReversed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFavoriteChange = (listingId, isFavorite) => {
    if (isFavorite) {
      if (!favoriteList.includes(listingId)) {
        setFavoritesCount(favoritesCount + 1);
        setFavoriteList([...favoriteList, listingId]);
      }
    } else {
      if (favoriteList.includes(listingId)) {
        setFavoritesCount(favoritesCount - 1);
        setFavoriteList(favoriteList.filter((id) => id !== listingId));
      }
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-l-md shadow-md z-50 ${
          isDarkMode
            ? "bg-black hover:bg-gray-700 text-white border"
            : "bg-yellow-500 hover:bg-yellow-400 text-black border-black"
        }`}
      >
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </button>

      <Header
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        onMaisonsClick={handleMaisonsClick}
        isDarkMode={isDarkMode}
        favoritesCount={favoritesCount}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <main className="flex-grow">
        <Logement
          isLoggedIn={isLoggedIn}
          isReversed={isReversed}
          onFavoriteChange={handleFavoriteChange}
          favoriteList={favoriteList}
          filter={filter}
        />
        <Avis />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
