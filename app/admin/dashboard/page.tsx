'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function BankDashboard() {
  const banks = [
     { id: 'bank1', name: 'Banque Populaire', href: 'bank1', src: '/images/bank1.png' },
     { id: 'bank2', name: 'BNP Paribas', href: 'bank2', src : '/images/bank2.jpeg' },
     { id: 'bank3', name: 'Crédit Agricole', href: 'bank3', src: '/images/bank3.png' },
     { id: 'bank4', name: 'Société Générale', href: 'bank4', src: '/images/bank4.jpg' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Sélectionnez une banque</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {banks.map((bank) => (
              <Link
                key={bank.id}
                href={`/admin/dashboard/${bank.href}`}
                className="group relative flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm transition-all hover:shadow-md hover:border-blue-500"
              >
                <div className="relative w-full h-24">
                  <Image 
                    src={bank.src} 
                    alt={`Logo ${bank.name}`} 
                    fill
                    className="object-contain transition-transform group-hover:scale-105" 
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}