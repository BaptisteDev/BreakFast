import React, { useState, useEffect } from "react";
import Image_logement from "./Image_logement";
import listeMaison from "./Liste_maison";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";

export default function Logement({
  isLoggedIn,
  isReversed,
  onFavoriteChange,
  favoriteList,
  filter,
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [list, setList] = useState(listeMaison);
  const [selectedId, setSelectedId] = useState(null);

  const newListeMaison = {
    id: Math.floor(Math.random() * 1000), // Generate a random ID
    image:
      "https://www.roubaixxl.fr/wp-content/uploads/2019/03/roubaixmeconnue6_1.jpg",
    title: "Villa de Luxe",
    location: "Roubaix, France",
    price: "2.50",
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "700px",
      height: "500px",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  function affciheLogement(id) {
    setSelectedId(id);
    setIsOpen(true);
  }

  function supprimerLogement(id) {
    setList(list.filter((item) => item.id !== id));
  }
  function addLogement() {
    setList([...list, newListeMaison]);
  }
  useEffect(() => {
    const filtered = listeMaison.filter((listing) =>
      listing.location.toLowerCase().includes(filter.toLowerCase())
    );
    setList(filtered);
  }, [filter]);

  return (
    <div className="ml-6 mt-6">
      {!isLoggedIn ? (
        <p>Il faut être connecté pour voir les logements.</p>
      ) : (
        <>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Logements disponibles</h1>
            <button
              className="bg-red-500 text-white p-2 mr-4"
              onClick={addLogement}
            >
              Ajouter un logement
            </button>
          </div>
          <div
            className={`flex overflow-x-auto gap-6 mt-6 cursor-pointer ${
              isReversed ? "flex-row-reverse" : "flex-row"
            }`}
            style={{
              justifyContent: isReversed ? "flex-end" : "flex-start",
            }}
          >
            {list.map((listing) => (
              <Image_logement
                afficheLogement={() => affciheLogement(listing.id)}
                key={listing.id}
                listing={listing}
                onFavoriteChange={onFavoriteChange}
                isFavorite={favoriteList.includes(listing.id)}
                supprimerLogement={() => supprimerLogement(listing.id)}
              />
            ))}
          </div>
        </>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel=""
        style={customStyles}
      >
        <div>
          <div className="flex justify-between">
            <h2>Détails du logement</h2>
            <button onClick={closeModal}>
              <ImCross />
            </button>
          </div>
          <div>
            {list
              .filter((listing) => listing.id === selectedId)
              .map((filteredListing) => (
                <div key={filteredListing.id}>
                  <p>Mon id : {filteredListing.id}</p>
                  <img
                    src={filteredListing.image}
                    alt={filteredListing.title}
                    className="w-full h-64 object-cover"
                  />
                  <h3 className="text-xl font-bold mt-4">
                    {filteredListing.title}
                  </h3>
                  <p className="text-gray-600">{filteredListing.location}</p>
                  <p className="text-green-500 font-bold">
                    {filteredListing.price} €
                  </p>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
