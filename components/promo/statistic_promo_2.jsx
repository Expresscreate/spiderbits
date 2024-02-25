/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import Statistic_promo_carousel from '../carousel/statistic_promo_2_carousel';

const Statistic_promo_2 = () => {
	return (
		<div>
			{/* <!-- Promo 2 --> */}
			<section className="statistic_promo_2-section bg-[#7a0162] py-12 lg:pb-32 overflow-x-hidden" 
			
			style={{
				backgroundImage: "url('/images/spiderbits-bg-02.jpg')",
				backgroundPosition: 'bottom',
				backgroundSize: 'cover'
			  }}
			
			>
			   
				<div className="container">
					<div className="items-center justify-between lg:flex">
						<div className="mb-12 lg:w-[45%] lg:pr-16">
							<h2 className="mb-6 font-display text-2xl text-white">
							   SpiderBits: A Revolutionary NFT Poker Card Lottery System
							</h2>
							<p className="mb-8 text-lg leading-normal text-jacarta-200">
							SpiderBits introduces a unique lottery format where participants purchase tickets using our native token, Bits. 
							</p>
							<p className="mb-12 text-jacarta-200">
							Each ticket corresponds to a series of NFT poker cards, displayed on the platform dashboard with only the numbers visible. Players must arrange their cards in
chronological order, akin to traditional spider solitaire, to win prizes. By purchasing lottery tickets and staking Bits tokens, participants not only stand to win prizes but also earn profits from their
holdings.
							</p>
							<Link href="#">
								<a className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
									JOIN THE PRESALE
								</a>
							</Link>
						</div>
						<div className="relative text-center lg:w-1/2">
							<img
								src="/images/nft-game/gradient_glow_large_2.png"
								loading="lazy"
								alt=""
								className="pointer-events-none absolute scale-150"
							/>

							{/* <!-- Slider --> */}
							<Statistic_promo_carousel />

							<img
								src="/images/nft-game/crypto_icons_1.png"
								alt=""
								loading="lazy"
								className="pointer-events-none absolute -top-10 z-10 animate-fly"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end promo 2 --> */}
		</div>
	);
};

export default Statistic_promo_2;
