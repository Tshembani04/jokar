import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="header">
        <h1>Discover rare digital art and collection NFTs</h1>
        <h5>
          Digital marketplace for crypto collectibles and non-fungible tokens
          [NFTs]. Buy, Sell and Discover exclusive digital assets.
        </h5>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>{" "}
        Explore
      </button>
    </div>
  );
};

export default Home;
