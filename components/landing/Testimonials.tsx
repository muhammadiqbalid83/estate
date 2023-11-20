import Image from 'next/image'

export default function Testimonials() {
  return (
    <div className="max-container padding-container py-32">
      <div>
        <h1 className="text-[32px] text-center font-semibold">
          Testimonials From Our Customers
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
        </p>
      </div>
      <div className="flex mt-16">
        <div>
          <Image
            src="/about-4.jpg"
            alt="testimonials"
            width={456}
            height={534}
          />
        </div>
        <div className="ml-16">
          <h4 className="font-semibold mt-[30px]">Perfect Quality</h4>
          <p className="font-bold text-[20px] mt-[30px] leading-10">
            Amazing design, easy to customize and a design
            <br /> quality superlative account on its cloud platform
            <br /> for the optimezed performance. And we didn't on <br />
            our original designs
          </p>
          <h5 className="font-semibold text-[14px] mt-[20px]">Niken</h5>
          <h6 className="text-[13px]">Bank of America</h6>
        </div>
      </div>
    </div>
  )
}
