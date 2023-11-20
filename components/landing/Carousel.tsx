import Image from 'next/image'

export default function Carousel() {
  return (
    <div className="max-container padding-container flexBetween mt-5">
      <div className="flex flex-col">
        <h1 className="text-[40px] font-semibold">
          Discover a place you will <br /> love to live
        </h1>
        <div className="flex justify-between mt-[150px]">
          <div>
            <h1 className="text-[42px] font-semibold">400 </h1>
            <p className="text-sm">Award Wining</p>
          </div>
          <div>
            <h1 className="text-[42px] font-semibold">1k+</h1>
            <p className="text-sm">Happy Customer</p>
          </div>
          <div>
            <h1 className="text-[42px] font-semibold">200+</h1>
            <p className="text-sm">Property Ready</p>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <Image
            src="/slider-home7-1.jpg"
            alt="carousel-1"
            width={651}
            height={484}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/slider-home7-2.jpg"
            alt="carousel-1"
            width={651}
            height={484}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/slider-home7-3.jpg"
            alt="carousel-1"
            width={651}
            height={484}
          />
        </div>
      </div>
    </div>
  )
}
