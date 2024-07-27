import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./layouts/Container";

const NavMenu = [
	{
		label: "Products",
		href: "#products",
	},
	{
		label: "Contact us",
		href: "#contact-us",
	},
	{
		label: "Testimony",
		href: "#testimony",
	},
];
export default function Navbar() {
	return (
		<nav className='sticky top-0 left-0 w-full'>
			<Container>
				<div className='flex items-center justify-between'>
					<Link href={"/"}>
						<Image
							src={"/images/logo.png"}
							width={50}
							height={50}
							alt='brand logo'
							unoptimized
							priority
						/>
					</Link>
					{/* border-2 p-2 px-6 rounded-full */}
					<ul className='flex items-center gap-5 '>
						{NavMenu.map((item, index) => (
							<li
								key={index}
								className='px-3 py-1 hover:bg-red-500/10 hover:text-red-500 rounded-full'
							>
								<Link href={item.href} className='font-medium'>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
					<button className='p-2 rounded-sm border border-red-500 font-semibold'>
						Order now
					</button>
				</div>
			</Container>
		</nav>
	);
}
