import Container from "@/components/layouts/Container";
import { INGREDIENTS } from "@/constants/products";
import Image from "next/image";
import React from "react";

export default function IngredientsSection() {
  return (
    <div className='bg-primary/10 my-12'>
      <Container className='flex flex-col-reverse md:flex-row items-center gap-8'>
        {/* <div className='h-full w-[80%] md:w-[40%] relative'> */}
        <Image
          src={"/images/shito-group-2.png"}
          alt='shito'
          width={400}
          height={160}
          unoptimized
          className='object-contain hidden md:block md:w-[250px] lg:w-[400px] 2xl:w-[550px]'
        />
        {/* </div> */}
        <div className='py-5'>
          <h4 className='text-2xl xl:text-3xl font-semibold mb-2 capitalize'>
            Hot & spicy shito sauce
          </h4>
          <p className='text-sm text-slate-800 sm:max-w-[75%]'>
            Enjoy our signature sauce, made with fresh ingredients and natural
            spices. It&apos;s not just a sauce; it&apos;s an experience.
          </p>

          <div className='w-full px-4 md:px-0 mt-4'>
            <h6 className='text-sm xl:text-base text-primary mb-1.5 font-semibold'>
              Ingredient
            </h6>
            <ul className='grid grid-cols-2 gap-4 gap-y-2 md:pl-4'>
              {INGREDIENTS.map((ingredient) => (
                <li
                  key={ingredient}
                  className='text-slate-800 text-sm list-disc'
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className='relative flex flex-col items-center justify-center w-[40%] sm:w-[30%] h-[120px] md:h-[130px] md:w-[20%] p-3'>
							<p className='text-xs sm:text-sm text-white mb-1.5'>
								Starting from
							</p>
							<h5 className='font-semibold text-white text-xl'>8 GH</h5>
							<Image
								src='/images/star-bg.png'
								alt='star'
								width={100}
								height={100}
								className='absolute top-0 left-0 w-full h-full -z-[1]'
							/>
						</div> */}
        </div>
      </Container>
    </div>
  );
}
