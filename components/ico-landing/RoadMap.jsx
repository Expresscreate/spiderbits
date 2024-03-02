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
      text: `- Platform Conceptualization and Research
      - Team Formation
      - Whitepaper and Litepaper Development
      - Community Building and Airdrops
      - Token Presale Preparation
      `,
    },
    {
      id: 2,
      text: `- Token Presale Launch
      - Marketing and Promotion
      - Community Engagement
      - Token Sale Platform Integration
      `,
    },
    {
      id: 3,
      text: `- Smart Contract Development
      - Platform Architecture
      - NFT Integration
      - Security and Testing
      `,
    },
    {
      id: 4,
      text: `- Public Token Sale Launch
      - Marketing and Promotion
      - Community Engagement
      - Token Sale Platform Integration
      `,
    },
    {
      id: 5,
      text: `- Token Listing Preparation
      - Exchange Partnerships
      - Token Listing Event
      - Market Making Support
      `,
    },
    {
      id: 6,
      text: `- Public Platform Launch
      - Marketing and Promotion
      - Partnership Expansion
      `,
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
