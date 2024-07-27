import Container from "@/components/layouts/Container";
import { PRODUCTS } from "@/constants/products";
import { cn } from "@/utils";
import { WeightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProductsSection() {
  return (
    <Container>
      <div className='flex items-center flex-col-reverse sm:flex-row justify-between mb-7'>
        <div className='sm:w-[80%]'>
          <h1 className='section-title'>Our products</h1>
          <p className='body-text sm:w-[80%] md:w-1/2'>
            We offer a diverse of products that nourish your taste buds and a
            blend of your taste
          </p>
        </div>
        <Image
          src='/images/pepper.png'
          width={100}
          height={500}
          alt='pepper'
          className='hidden sm:inline sm:object-contain !w-[60px] sm:!w-[100px] sm:!h-[150px]'
        />
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-10 mt-5'>
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={cn(
              "w-full sm:flex-1 shrink-0 border-2 rounded-tl-[12rem] rounded-tr-[12rem] rounded-bl-2xl rounded-br-2xl px-3 py-5"
            )}
          >
            <div className='h-[190px] relative'>
              <div className='before:absolute before:top-0 before:left-0 before:w-[90%] before:mx-4 before:h-[75%] before:rounded-tl-[12rem] before:rounded-tr-[12rem] before:rounded-bl-2xl before:rounded-br-2xl  before:bg-primary/5' />
              <div
                className={cn(
                  product.name.toLowerCase().includes("medium")
                    ? "h-[88%]"
                    : "h-full",
                  "flex items-center justify-center  w-full relative"
                )}
              >
                <Image
                  src={product.image}
                  fill
                  alt={product.name}
                  className='object-contain'
                />
              </div>
            </div>
            <p className='text-base font-semibold capitalize'>{product.name}</p>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-primary text-lg font-semibold'>
                {product.price} GH
              </span>
              <div className='flex items-center'>
                <WeightIcon className='w-4 mr-1' />
                <span className='text-gray-500 text-sm'>{product.size}</span>
              </div>
            </div>
            <button className='w-full rounded-full hover:bg-primary hover:text-white py-1.5 px-3 border border-primary-300'>
              Order now
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
}
