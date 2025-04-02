import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sophie L.",
    review: "Super séjour ! Maison très propre et bien située.",
  },
  {
    id: 2,
    name: "Thomas B.",
    review: "Hôte très sympathique, je recommande à 100% !",
  },
  { id: 3, name: "Emma D.", review: "Excellente expérience, on reviendra." },
];

export default function Liste_avis() {
  return (
    <div className='ml-6 mt-6'>
      <h1 className='text-2xl font-bold'>Avis</h1>
      <div className='flex flex-col md:flex-row gap-6 mt-4 p-4 md:justify-start cursor-pointer'>
        {reviews.map((review) => (
          <div
            key={review.id}
            className='bg-white rounded-lg shadow-md p-4 w-full md:max-w-[calc(100%/3-1.5rem)] transition-transform transform hover:scale-105 hover:shadow-lg'>
            <h2 className='font-bold text-black'>{review.name}</h2>
            <p className='text-gray-600'>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
