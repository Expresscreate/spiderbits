import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title} || NFT Lottery Playing Cards Collection</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Spiderbits | NFT Lottery Playing Cards Collection",
  keyword:
    "bitcoin, blockchain, crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, nft next js, NFT react, non-fungible tokens, virtual asset, wallet",
  desc: "The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.",
};

export default Meta;
