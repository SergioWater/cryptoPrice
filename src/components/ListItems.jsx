import React from "react";
import { Link } from "react-router-dom";

export default function Listitems({ coin }) {
  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`}>
        <span className="home-crypto-image">
          <img src={coin.image} />
        </span>
        <span className="home-crypto-name">{coin.name}</span>

        {coin.priceBTC && (<span className="home-crypto-prices">
          <span className="crypto-home-btc">
            <img src="/bitcoin.webp" alt="" />
            {coin.priceBTC} BTC
          </span>
          <span className="crypto-home-usd"> ( {coin.priceUsd} USD )</span>
        </span>)
        }
      </Link>
    </div>
  );
}
