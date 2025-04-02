import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Image_logement({
  listing,
  onFavoriteChange,
  isFavorite,
  afficheLogement,
}) {
  const toggleFavorite = () => {
    onFavoriteChange(listing.id, !isFavorite);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-64 relative">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg text-black">{listing.title}</h2>
        <p className="text-gray-600">{listing.location}</p>
        <p className="mt-2 text-red-500 font-semibold">
          {listing.price}€ / nuit
        </p>
      </div>
      <button
        onClick={toggleFavorite}
        className="absolute bottom-2 right-2 p-1 rounded-full focus:outline-none"
      >
        <FaHeart
          className={`h-6 w-6 ${isFavorite ? "text-pink-500" : "text-black"}`}
        />
      </button>
      <button onClick={() => afficheLogement(listing.id)}>Voir</button>
    </div>
  );
}
