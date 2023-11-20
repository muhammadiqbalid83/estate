import { customFetch } from '@/utils/fetchApi'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

const urlRent =
  '/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=3'

interface Property {
  id: string
  coverPhoto: {
    url: string
  }
  title: string
  price: number
  agency: {
    logo: {
      url: string
    }
  }
  baths: number
  rooms: number
  area: number
}

export default function PopularProperties() {
  const [populars, setPopulars] = useState<Property[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const fetchPopulars = async () => {
    try {
      const response = await customFetch(urlRent)
      setPopulars(response.data.hits)
      setLoading(false) //set loading ke false setelah data berhasil dimuat
      console.log(response.data.hits)
    } catch (error) {
      console.error('Error fetching data')
    }
  }

  useEffect(() => {
    fetchPopulars()
  }, [])

  return (
    <div className="max-container padding-container  mt-[130px]">
      <h1 className="text-[30px] font-semibold">Discover Popular Properties</h1>
      <p>Aliquam lacinia diam quis lacus euismod</p>
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div className="flex justify-between mt-[30px]">
          {populars.map((popular) => {
            return (
              <div key={popular.id} className="w-[352px] h-[438px]  shadow-lg">
                <div className="">
                  <Image
                    src={popular.coverPhoto.url}
                    width={353}
                    height={200}
                    alt="photo"
                  />
                </div>
                <div className="p-4">
                  <h1 className="font-semibold mt-4 text-[20px]">
                    AED {popular.price.toLocaleString('en-US')} Monthly
                  </h1>
                  <div className="flex  gap-4 text-[14px] mt-[7px]">
                    <div className="flex items-center gap-1">
                      {popular.rooms} <FaBed />
                    </div>{' '}
                    <div className="flex items-center gap-1">
                      {popular.baths} <FaBath />
                    </div>{' '}
                    <div className="flex items-center gap-1">
                      {millify(popular.area)} sqft <BsGridFill />
                    </div>
                  </div>
                  <p className="text-[14px] mt-[5px]">{popular.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
