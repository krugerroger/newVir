import Link from 'next/link'
import Image from 'next/image'

export default function VerificationSuccessPage() {
  return (
    <div className="flex flex-col">

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        {/* Success Image */}
        <div className="mb-8 text-center">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/images/v.png"
              alt="Checking done"
              width={400}
              height={300}
              className="w-full h-auto max-w-[50%] mx-auto"
            />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center">
          {/* TRADUCTION: Verification effectué -> Баталгаажуулалт амжилттай боллоо */}
          <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
            Баталгаажуулалт амжилттай боллоо
          </p>
          {/* TRADUCTION: Votre vérification a été effectuée avec succès... -> Таны баталгаажуулалт амжилттай хийгдлээ. Та одоо бүх боломжуудыг ашиглах эрхтэй. */}
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Таны баталгаажуулалт амжилттай хийгдлээ. Та одоо бүх үйлчилгээг ашиглах боломжтой.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 text-center"
            >
              {/* TRADUCTION: Retour à l'accueil -> Нүүр хуудас руу буцах */}
              Нүүр хуудас руу буцах
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            {/* TRADUCTION: Votre vérification est complète -> Таны баталгаажуулалт бүрэн дууссан */}
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Таны баталгаажуулалт бүрэн дууссан
            </h3>
            <ul className="text-gray-600 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {/* TRADUCTION: Vérification d'identité terminée -> Биеийн байцаалт баталгаажуулалт дууссан */}
                <span>Биеийн байцаалт баталгаажуулалт дууссан</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {/* TRADUCTION: Documents validés -> Бичиг баримт баталгаажсан */}
                <span>Бичиг баримт баталгаажсан</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {/* TRADUCTION: Compte entièrement sécurisé -> Данс бүрэн хамгаалагдсан */}
                <span>Данс бүрэн хамгаалагдсан</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  )
}