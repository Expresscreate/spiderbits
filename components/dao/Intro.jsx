import Image from "next/image";
import TradeVolume from "./TradeVolume";

const Intro = () => {
  return (
    // <!-- Intro -->
    <section className="bg-gradient-to-r from-[transparent_33%] to-[#F5F8FA_33%] py-36 dark:to-[#101436_33%]">
      <div className="container">
         <div className="mx-auto mb-12 max-w-xl text-center">
						<h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Tokenomic 
						</h2>
						<p className="text-lg dark:text-jacarta-300">
            SpiderBits (BITS) is the native utility token of the SpiderBits platform, designed to facilitate transactions, incentivize participation, and govern the ecosystem. The tokenomics of SpiderBits
are carefully crafted to ensure fairness, sustainability, and value appreciation for token holders. Below is a detailed breakdown of the tokenomics:
						</p>
					</div>

        <div className="lg:flex lg:justify-between">
          

          {/* <!-- Info --> */}
          <div className="py-10 lg:w-[100%] lg:pl-24">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
            Total Token Supply
            </h2>
            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
            The total supply of SpiderBits tokens is capped at 10 billion (10,000,000,000) BITS.
            </p>
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
            Token Distribution
            </h2>
            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
            1. Token Sale (Public and Presale):
            - Presale Allocation: 20% of total token supply
            - Public Sale Allocation: 30% of total token supply
            - Total Allocation: 50% of total token supply
            </p>
           
            <TradeVolume />
          </div>
        </div>
      </div>
    </section>
    // <!-- end intro -->
  );
};

export default Intro;
