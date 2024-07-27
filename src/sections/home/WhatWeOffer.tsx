import Container from "@/components/layouts/Container";
import { ShieldCheckIcon, ShoppingBasketIcon, SoupIcon } from "lucide-react";
import React from "react";

export default function WhatWeOffer() {
  return (
    <Container className='mt-4 sm:mt-7'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
        <div className='shrink-0 flex-1 flex items-center border-2 rounded-full gap-3 sm:gap-5 p-3 md:px-5 md:py-4'>
          <div className='shrink-0 bg-primary/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center'>
            <ShieldCheckIcon className='w-6' />
          </div>
          <h5 className='font-bold text-sm md:text-base lg:text-xl'>
            100% Authentic Recipe
          </h5>
        </div>
        <div className='shrink-0 flex-1 flex items-center border-2 rounded-full gap-3 sm:gap-5 p-3 md:px-5 md:py-4'>
          <div className='shrink-0 bg-primary/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center'>
            <ShoppingBasketIcon className='w-6' />
          </div>
          <h5 className='font-bold text-sm md:text-base lg:text-xl'>
            Quality Ingredients
          </h5>
        </div>
        <div className='shrink-0 flex-1 flex items-center border-2 rounded-full gap-3 sm:gap-5 p-3 md:px-5 md:py-4'>
          <div className='shrink-0 bg-primary/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center'>
            <SoupIcon className='w-6' />
          </div>
          <h5 className='font-bold text-sm md:text-base lg:text-xl'>
            Unmatched Flavor
          </h5>
        </div>
      </div>
    </Container>
  );
}
