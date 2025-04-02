import React from "react";

export default function ImageModal({
  isOpen,
  onClose,
  image,
  id,
  title,
  location,
  price,
}) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-6 rounded-lg relative max-w-3xl max-h-[90vh] overflow-auto'>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-gray-600 hover:text-gray-800'>
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <img src={image} alt={title} className='w-full object-cover mb-4' />
        <div className='mt-4'>
          <h2 className='font-bold text-2xl text-black'>{title}</h2>
          <p className='text-gray-600'>{location}</p>
          <p className='mt-2 text-red-500 font-semibold'>{price}€ / nuit</p>
          <p className='mt-2 text-gray-800'>ID: {id}</p>
        </div>
      </div>
    </div>
  );
}
