import Link from 'next/link'
import Image from 'next/image'

const banks = [
  { id: 1, name: 'Banque TDB', imageSrc: '/images/ban1.png', href: '/bank1' },
  { id: 2, name: 'Bank 2', imageSrc: '/images/bank2.jpeg', href: '/bank2' },
  { id: 3, name: 'Bank 3', imageSrc: '/images/bank3.png', href: '/bank3' },
  { id: 4, name: 'Bank 4', imageSrc: '/images/bank4.jpg', href: '/bank4' },
]

export default function BankSelection() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center my-8 sm:my-10 lg:my-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 relative inline-block">
          Таны банкыг сонго
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 sm:translate-y-3 w-16 sm:w-20 h-1 bg-green-600 rounded-full"></span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
          Дараах банкуудаас сонголтоо хийгээрэй
        </p>
      </div>

      {/* Bank Cards Grid */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-12 lg:mb-16">
        {banks.map((bank) => (
          <div 
            key={bank.id}
            className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-32 sm:w-40 lg:w-48 p-3 sm:p-4 lg:p-6 border border-gray-100 hover:border-green-200 hover:-translate-y-1"
          >
            <Link 
              href={bank.href} 
              className="block no-underline"
            >
              <div className="relative h-20 sm:h-24 lg:h-28 w-full mb-3 sm:mb-4">
                <Image
                  src={bank.imageSrc}
                  alt={bank.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
              <div className="text-center">
                {/* <span className="text-gray-900 font-medium text-sm sm:text-base lg:text-lg">
                  {bank.name}
                </span> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}