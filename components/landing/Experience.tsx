export default function Experience() {
  return (
    <div className="max-container padding-container bg-black text-white gap-[180px] flex mt-[50px] py-36 ">
      <div className="mt-[100px]">
        <h1 className="text-[32px]">
          More than 20 years of Real <br /> Estate Experience
        </h1>
        <p className="mt-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do
          eiusmod tempor incididunt.
        </p>
        <button className="btn mt-8">Get Started</button>
      </div>
      <div className="flex ">
        <div>
          <div className="w-52 h-52 bg-white text-black p-9">
            <h1 className="text-[45px]">2,500+</h1>
            <p className="text-[15px] ">Listing for sale</p>
          </div>
          <div className="w-52 h-52 bg-white text-black p-9 mt-8">
            <h1 className="text-[45px]">900+</h1>
            <p className="text-[15px]">Listing for rent</p>
          </div>
        </div>
        <div className="w-52 h-52 bg-white text-black p-9 ml-8 mt-28">
          <h1 className="text-[45px]">1,350+</h1>
          <p className="text-[15px]">Property for sold</p>
        </div>
      </div>
    </div>
  )
}
