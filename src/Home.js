import React, { useState } from "react";
import Web3 from "web3";

export default function Home() {
  const [hash, setHash] = useState("");
  const [arr, setArr] = useState([]);
  const [gas, setGas] = useState("");
  const [gasused, setUsed] = useState("");

  const handleDone = async () => {
    const web3 = await new Web3(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );
    console.log(web3, "home");

    const latest = await web3.eth.getBlockNumber();

    const hash = await (await web3.eth.getBlock(latest)).hash;
    console.log(hash, "hash");
    setHash(hash);

    const arr = await (await web3.eth.getBlock(latest)).transactions[0];
    console.log(arr, "arr");
    setArr(arr);

    const gas = await (await web3.eth.getBlock(latest)).gasLimit;
    console.log(gas, "gaslimit");
    setGas(gas);

    const gasused = await (await web3.eth.getBlock(latest)).gasUsed;
    console.log(gasused, "gasused");
    setUsed(gasused);
  };
  return (
    <>
      <div>
        <button onClick={handleDone}>Traction details</button>
      </div>
      <div>
        <h5 style={{ color: "green" }}>Traction hash</h5>
        <h5>{hash}</h5>
      </div>
      <h5 style={{ color: "green" }}>Transction </h5> <h5>{arr}</h5>
      <h5 style={{ color: "green" }}>Gas Limit</h5> <h5>{gas}</h5>
      <h5 style={{ color: "green" }}>Gas used</h5> <h5>{gasused}</h5>
    </>
  );
}
