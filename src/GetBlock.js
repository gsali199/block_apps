import React, { useState } from "react";
import Web3 from "web3";
import Nav from "./Nav";

export default function GetBlock(props) {
  const [block, setBlock] = useState(0);
  const [latest, setLatest] = useState("");

  const handleSubmit = async () => {
    const web3 = await new Web3(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );
    web3.eth.getBlockNumber().then((res) => setBlock(res));
    console.log(web3);

    const latest = await web3.eth.getBlockNumber();
    console.log(latest, "latest");
    setLatest(latest);

    const block = await await web3.eth.getBlock(latest);
    console.log(block, "block");
  };

  return (
    <div>
      <Nav block={block} />
      <button onClick={handleSubmit}>Get current block </button>
      <h1>{block}</h1>
    </div>
  );
}
