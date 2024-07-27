import Container from "@/components/layouts/Container";
import Image from "next/image";
import React from "react";

export default function SecondaryHeroSection() {
  return (
    <div className='relative h-[90%] lg:h-[420px] bg-primary/20'>
      <Container className='h-full'>
        <div className='pt-4 h-full flex items-center md:justify-between flex-col md:flex-row'>
          <aside className='text-center md:text-left pt-8 md:pt-0 sm:w-[80%] md:w-[59%] mb-12 md:mb-0'>
            <h1 className='text-3xl lg:text-4xl xl:text-[2.75rem] !leading-[1.2] font-bold'>
              <span className='text-primary'>Bold</span> and{" "}
              <span className='text-primary'>spicy</span> with Shitoland&apos;s
              irresistible blend
            </h1>
            <p className='my-3 mb-4'>
              Experience the bold, spicy essence of Ghanaian cuisine with
              Shitoland&apos;s irresistible shito sauce.
            </p>

            <div className='flex flex-col md:flex-row items-center gap-5'>
              <p className='font-semibold'>Starting from GH₵ 8</p>
              <button className='p-2 px-8 shadow-md rounded-full hover:bg-primary-300 bg-primary text-white font-semibold'>
                Order now
              </button>
            </div>
          </aside>
          <div className='w-[80%] h-[300px] md:flex-1 relative'>
            <Image
              src='/images/shito-group.png'
              alt='pepper'
              fill
              unoptimized
              className='object-contain'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
