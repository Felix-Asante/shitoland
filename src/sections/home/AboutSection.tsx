import Container from "@/components/layouts/Container";
import { WHATSAPP_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <div className='mt-12 sm:mb-12 xl:mt-20'>
      <Container>
        <div className='flex flex-col sm:flex-row xl:items-center gap-8 justify-between'>
          <div className='sm:w-1/2'>
            <h4 className='section-title'>About us Shitoland</h4>
            <p className='body-text'>
              At JFB foods, we bring the fiery flavors straight to your table.
              Our authentic shito sauce is crafted using traditional recipes and
              the finest ingredients, delivering a unique blend of heat and
              flavor that will elevate any dish.
            </p>
            <Link
              href={WHATSAPP_URL}
              target='_blank'
              className='inline-block mt-6 p-2.5 px-8 rounded-full bg-primary hover:bg-primary-300 text-white font-semibold'
            >
              Order now
            </Link>
          </div>
          <div className='sm:w-[40%] h-fit bg-primary/10 rounded-2xl p-2'>
            <Image
              src='/images/shito-group-2.png'
              alt='shito'
              width={200}
              height={200}
              unoptimized
              className='object-contain !w-full !h-full'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
