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
          <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
            Verification effectué
          </p>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Votre vérification a été effectuée avec succès. Vous pouvez maintenant accéder à toutes les fonctionnalités.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 text-center"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Votre vérification est complète
            </h3>
            <ul className="text-gray-600 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Vérification d&apos;identité terminée</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Documents validés</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Compte entièrement sécurisé</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  )
}