import Star from "@/components/ui/icons/Star";
import { Fragment } from "react";
import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css";
export default function HeroMarque() {
	// -rotate-[2.33deg]
	return (
		<div className='relative'>
			<div className='bg-primary flex items-center gap-8 -rotate-[362deg] -mx-3 h-[5rem] overflow-x-hidden'>
				<Marquee className='gap-12 animate-marquee-reverse' numberOfCopies={6}>
					<ListItem label='Quality ingredient' />
					<ListItem label='Versatile' />
					<ListItem label='Health' />
					<ListItem label='Authentic Recipe' />
				</Marquee>
			</div>
			{/* absolute top-0 -right-5 z-10 -rotate-[357deg]*/}
			<div className='bg-primary-300 h-[5rem] flex gap-8 absolute top-0 -right-5 -left-5 z-10 -rotate-[357deg] overflow-x-hidden -mx-3'>
				<Marquee className='gap-12 animate-marquee' numberOfCopies={6}>
					<ListItem label='Quality ingredient' />
					<ListItem label='Versatile' />
					<ListItem label='Health' />
					<ListItem label='Authentic Recipe' />
				</Marquee>
			</div>
		</div>
	);
}

function ListItem({ label }: { label: string }) {
	return (
		<li className='shrink-0 flex items-center gap-2 text-white font-medium px-8'>
			<Star width='20' />
			{label}
		</li>
	);
}
