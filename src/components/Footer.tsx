import React from "react";
import Container from "./layouts/Container";
import Link from "next/link";
import WhatsappIcon from "./ui/icons/WhatsappIcon";
import XIcon from "./ui/icons/XIcon";
import FacebookIcon from "./ui/icons/FacebookIcon";
import InstagramIcon from "./ui/icons/InstagramIcon";
import PhoneIcon from "./ui/icons/PhoneIcon";

export default function Footer() {
  return (
    <footer className='mt-8 pb-4'>
      <Container>
        <div className='flex flex-col items-center'>
          <h3 className='section-title text-center mb-2'>
            Get in touch with us on our socials
          </h3>
          <p className='text-slate-700 md:w-1/2 text-center'>
            Follow us on our social to keep in close contact with us and get
            latest updates on our product
          </p>
          <div className='mt-5 flex items-center gap-7'>
            <Link target='_blank' href={"/"} className='footer-icon'>
              <WhatsappIcon />
            </Link>
            <Link target='_blank' href={"/"} className='footer-icon'>
              <XIcon />
            </Link>
            <Link target='_blank' href={"/"} className='footer-icon'>
              <FacebookIcon />
            </Link>
            <Link target='_blank' href={"/"} className='footer-icon'>
              <InstagramIcon />
            </Link>
            <Link target='_blank' href={"/"} className='footer-icon'>
              <PhoneIcon />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
