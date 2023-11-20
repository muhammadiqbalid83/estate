import Image from 'next/image'

export default function Help() {
  return (
    <div className="max-container padding-container bg-black py-28">
      <div>
        <h1 className="text-[30px] text-white text-center font-bold">
          See How Estate Can Help
        </h1>
        <p className="text-center text-white">
          Aliquam lacinia diam quis lacus euismod
        </p>
      </div>
      <div className="flex justify-around mt-16">
        <div className="w-[356px] h-[462px] bg-white text-center rounded-md ">
          <Image
            src="/property-rent.svg"
            width={150}
            height={150}
            alt="/property-rent.svg"
            className="ml-[105px] mt-[60px]"
          />
          <h1 className="text-xl font-semibold mt-[20px]">Rent a property</h1>
          <p className="text-sm mt-[15px]">
            Nullam sollicitudin blandit eros eu <br /> pretium. Nullam maximus
            ultricies
            <br /> auctor.
          </p>
          <button className="btn btn-neutral mt-[20px]">Find a rental</button>
        </div>
        <div className="w-[356px] h-[462px] bg-white text-center rounded-md ">
          <Image
            src="/property-sell.svg"
            width={150}
            height={150}
            alt="/property-sale.svg"
            className="ml-[105px] mt-[60px]"
          />
          <h1 className="text-xl font-semibold mt-[20px]">Sale a property</h1>
          <p className="text-sm mt-[15px]">
            Nullam sollicitudin blandit eros eu <br /> pretium. Nullam maximus
            ultricies
            <br /> auctor.
          </p>
          <button className="btn btn-neutral mt-[20px]">Place an ad</button>
        </div>
      </div>
    </div>
  )
}
