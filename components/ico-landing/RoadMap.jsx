import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const RoadMap = () => {
  const [itemsTabs, setItemsTabs] = useState(1);

  const roadMapList = [
    {
      id: 1,
      tabMenu: "Q1-Q2 2024 : Genesis and Development",
    },
    {
      id: 2,
      tabMenu: "Q3 2024 : Token Presale",
    },
    {
      id: 3,
      tabMenu: "Q4 2024 : Platform Development",
    },
    {
      id: 4,
      tabMenu: "Q1 2025 : Token Sale",
    },
    {
      id: 5,
      tabMenu: "Q2 2025 : Token Listing Event",
    },
    {
      id: 6,
      tabMenu: "Q3-Q4 2025 : Public Platform Launch and Marketing",
    },
  ];
  const roadMapContent = [
    {
      id: 1,
      text: `Platform Conceptualization and Research: Perform thorough research on blockchain, NFTs, and lottery systems for SpiderBits' foundation.
      Team Formation: Create a skilled team in blockchain, game design, and business for project execution.
      Whitepaper and Litepaper: Produce detailed documents explaining SpiderBits' vision, solution, tokenomics, and timeline.
      Community Building and Airdrops: Engage with potential users via social media and events, and conduct airdrops for early support.
      Token Presale Preparation: Set up for presale, including defining sale details, goals, and marketing to attract investment.`,
    },
    {
      id: 2,
      text: `Token Presale Launch: 
      Launch the SpiderBits token presale, offering early investors the opportunity to purchase tokens at a discounted rate. 
      Marketing and Promotion: 
      Execute targeted marketing campaigns to promote the token presale and attract potential investors from the crypto community.
      Community Engagement: 
      Engage with the community to provide updates on the presale progress, answer questions, and address concerns raised by prospective investors. 
      Token Sale Platform Integration: 
      Integrate secure and user-friendly platforms for token sale transactions, ensuring a smooth and efficient process for participants.`,
    },
    {
      id: 3,
      text: `Smart Contract Development: 
             Develop and deploy smart contracts for lottery ticket purchasing, NFT minting, staking, and governance functionalities. 
             Platform Architecture: 
             Design and implement the backend infrastructure, front-end interface, and user experience flow of the SpiderBits platform. 
             NFT Integration: 
             Integrate non-fungible tokens (NFTs) into the SpiderBits platform, including the creation of unique poker cards for lottery participation. 
             Security and Testing: 
             Conduct rigorous security audits and testing phases to ensure the integrity and reliability of the SpiderBits platform.`,
    },
    {
      id: 4,
      text: `Public Token Sale Launch: Launch the public token sale, offering SpiderBits tokens to a wider audience of investors and enthusiasts.
             Marketing and Promotion: Ramp up marketing efforts to generate hype and attract participants to the public token sale.
             Community Engagement: Continue engaging with the community to provide updates on the token sale progress and address any inquiries or concerns.
             Token Sale Platform Integration: Ensure seamless integration of token sale platforms to accommodate high demand and facilitate efficient token distribution.`,
    },
    {
      id: 5,
      text: `Token Listing Preparation: 
      Prepare for the listing of SpiderBits tokens on cryptocurrency exchanges by completing necessary documentation, compliance checks, and technical integrations. 
      Exchange Partnerships: Forge partnerships with reputable cryptocurrency exchanges for the listing of SpiderBits tokens, ensuring liquidity and accessibility for token holders. 
      Token Listing Event: Officially list SpiderBits tokens on selected cryptocurrency exchanges, allowing traders and investors to buy, sell, and trade BITS tokens on secondary markets. 
      Market Making Support: Provide market making support and liquidity incentives to ensure healthy trading activity and price stability for SpiderBits tokens upon listing.`,
    },
    {
      id: 6,
      text: `Public Platform Launch: Officially launch the SpiderBits platform to the public, allowing users to participate in lotteries, stake tokens, and engage with NFTs. 
      Marketing and Promotion: Execute comprehensive marketing campaigns across various channels to promote the SpiderBits platform and attract users. 
      Partnership Expansion: Forge strategic partnerships with other blockchain projects, gaming platforms, and lottery organizations to expand the reach and adoption of SpiderBits.`,
    },
   
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-jacarta-700/60"
      id="roadmap"
      style={{
        backgroundImage: 'url("/images/ico-landing/ico_landing_roadmap.jpg")',
      }}
    >
      <div className="container relative z-10">
        <h2 className="mb-6 font-display text-3xl text-center text-white">Roadmap</h2>
        <p className="mb-6 text-lg text-jacarta-300 text-center">
          This timeline details our funding and development goals. Connect our
          AI to your exchange account and invest crypto automatically.
        </p>

        <Tabs>
          <div className="flex">
            <TabList className="nav nav-tabs w-2/4 space-y-9 self-start border-l-2 border-jacarta-200 py-2 pl-2 md:pl-8">
              {roadMapList.map((item) => (
                <Tab
                  className="nav-item"
                  key={item.id}
                  onClick={() => setItemsTabs(item.id)}
                >
                  <button
                    className={
                      itemsTabs === item.id
                        ? "active nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                        : "nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                    }
                  >
                    <span className="px-2 font-display text-lg font-medium md:text-l">
                      {item.tabMenu}
                    </span>
                  </button>
                </Tab>
              ))}
            </TabList>
            {/* End Tablist  */}

            <div className="tab-content w-full pl-4 md:mt-16 md:w-2/4">
              {roadMapContent.map((item) => (
                <TabPanel key={item.id}>
                  <p className="text-lg text-white">{item.text}</p>
                </TabPanel>
              ))}
            </div>
            {/* End tab-content */}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default RoadMap;
