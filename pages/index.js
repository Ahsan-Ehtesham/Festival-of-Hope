import Head from "next/head";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import footer_logo from "../public/images/logo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
let Web3 = require("web3");

export default function Home() {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  let abi = [0x0901];
  let contractAddress = "YOUR_CONTRACT_ADDRESS";
  useEffect(() => {
    window.ethereum
      ? ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            setAddress(accounts[0]);
            let w3 = new Web3(ethereum);
            setWeb3(w3);

            let c = new w3.eth.Contract(abi, contractAddress);
            setContract(c);

            c.methods
              .totalSupply()
              .call()
              .then((_supply) => {
                // Optionally set it to the state to render it using React
                setTotalSupply(_supply);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err))
      : console.log("Please install MetaMask");
  }, []);

  function mint() {
    let _price = web3.utils.toWei("1");
    let encoded = contract.methods.safeMint().encodeABI();

    let tx = {
      from: address,
      to: YOUR_CONTRACT_ADDRESS,
      data: encoded,
      nonce: "0x00",
      value: web3.utils.numberToHex(_price),
    };

    let txHash = ethereum
      .request({
        method: "eth_sendTransaction",
        params: [tx],
      })
      .then((hash) => {
        alert("You can now view your transaction with hash: " + hash);
      })
      .catch((err) => console.log(err));

    return txHash;
  }
  return (
    <>
      <Head>
        <title>Fruit Festival</title>
        <meta
          name="description"
          content="Assisting hardworking farmers (fruit farming) in achieving a profitable harvest."
        />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>

      <main>
        <Navbar />
        <Header />
        <Trending />
        <Discover />
      </main>

      <footer>
        <p className="d-flex align-items-center justify-content-center">
          Copyright 2023
          <span>
            <Image src={footer_logo} alt="Footer Logo" width={72} height={32} />
          </span>
        </p>
      </footer>
    </>
  );
}
