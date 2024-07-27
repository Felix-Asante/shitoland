import Container from "@/components/layouts/Container";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { TESTIMONIALS } from "@/constants/testimonials";
import React from "react";

export default function TestimonialSection() {
  const cards = TESTIMONIALS.map((img, index) => (
    <Card
      key={index}
      card={{ src: img }}
      index={index}
      className='md:h-[24rem] w-64'
    />
  ));

  return (
    <div>
      <Container>
        <h4 className='section-title'>Reviews from our customers</h4>
      </Container>
      <Carousel items={cards} />
    </div>
  );
}
