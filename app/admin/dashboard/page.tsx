'use client'
import Link from 'next/link'
import Image from 'next/image'


export default function BankDashboard() {

  const banks = [
     { id: 'bank1', href: 'bank1', src: '/images/bank1.png',  },
     { id: 'bank2', href: 'bank2', src : '/images/bank2.jpeg' },
     { id: 'bank3', href: 'bank3', src: '/images/bank3.png' },
     { id: 'bank4', href: 'bank4', src: '/images/bank4.jpg' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-4 py-8">
        {/* Sélection des banques */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Sélectionnez une banque</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {banks.map((bank) => (
              <Link
                key={bank.id}
                href={`/admin/dashboard/${bank.href}`}
                className='flex flex-wrap h-50 w-50 border flex'
              >
                <Image src={bank.src} alt={bank.id} width={100} height={200} className="w-full h-32 object-cover rounded-lg" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}