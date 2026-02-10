import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Section Gauche : Titre et Description */}
          <div className="mb-6 md:mb-0 md:w-1/2 text-center md:text-left">
            <h5 className="text-xl font-bold mb-2">Олон улсын шилжүүлэг</h5>
            <p className="text-gray-300 text-sm md:text-base">
              Дэлхийн аль ч газар хурдан, аюулгүй мөнгө шилжүүлэх үйлчилгээ.
            </p>
          </div>

          {/* Section Droite : Liens et Copyright */}
          <div className="md:w-1/2 w-full text-center md:text-right">
            <ul className="flex flex-col md:flex-row justify-center md:justify-end gap-4 list-none p-0 mb-4">
              <li>
                {/* Note: Assure-toi que la couleur 'accent' est définie dans tailwind.config.ts, sinon utilise 'hover:text-orange-500' */}
                <Link href="#" className="text-gray-300 hover:text-accent transition-colors no-underline">
                  Үйлчилгээний нөхцөл
                </Link>
              </li>
              <li>
                <Link href="/admin/signIn" className="text-gray-300 hover:text-accent transition-colors no-underline">
                  Terms
                </Link>
              </li>
            </ul>
            <p className="text-gray-400 text-sm">
              &copy; 2023 Олон улсын шилжүүлэг. Бүх эрх хуулиар хамгаалагдсан.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}