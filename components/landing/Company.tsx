import Image from 'next/image'

export default function Company() {
  return (
    <div className="max-container padding-container mt-36">
      <p className="text-center font-semibold">Trusted by the world’s best</p>
      <div className="flex items-center justify-between mt-16">
        <div>
          <Image src="/1.png" alt="top companies" width={90} height={20} />
        </div>
        <div>
          <Image src="/2.png" alt="top companies" width={90} height={40} />
        </div>
        <div>
          <Image src="/3.png" alt="top companies" width={80} height={20} />
        </div>
        <div>
          <Image src="/4.png" alt="top companies" width={100} height={20} />
        </div>
        <div>
          <Image src="/5.png" alt="top companies" width={80} height={20} />
        </div>
        <div>
          <Image src="/6.png" alt="top companies" width={80} height={20} />
        </div>
      </div>
    </div>
  )
}
