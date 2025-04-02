import React from "react";

function Footer({ isDarkMode }) {
  return (
    <footer
      className={`py-12 px-6 ${
        isDarkMode ? "bg-black text-white" : "bg-[#1e2939] text-white"
      }`}>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <h4 className='font-bold mb-4 text-lg'>À propos</h4>
          <p className='text-base'>
            Nous aidons les voyageurs à trouver le logement idéal.
          </p>
        </div>

        <div>
          <h4 className='font-bold mb-4 text-lg'>Support</h4>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:underline text-base'>
                Contact
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline text-base'>
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4 text-lg'>Suivez-nous</h4>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:underline text-base'>
                Facebook
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline text-base'>
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4 text-lg'>Mentions Légales</h4>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:underline text-base'>
                Conditions Générales
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline text-base'>
                Politique de Confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
