import { contract, providers, utils } from "ethers";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import {abi, NFT_CONTRACT_ADDRESS } from "../constants";
import styles from "../styles/Home.module.css"

export default function Home() {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  // presaleStarted keeps track of whether the presale has started or not
  const [presaleStarted, setPresaleStarted] = useState(false);
  // presaleEnded keeps track of whether the presale ended
  const [presaleEnded, setPresaleEnded] = useState(false);
  // loading is set to true when twe are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
  //checks if the currently connected Metamask wallet is the owner of the contract
  const [isOwner, setIsOwner] = useState(false);
  //tokenIdsMinted keeps track of the number of tokenIds that have been minted
  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");
  //create a reference to the web3 Modal (used for connecting metamask) which persists as long as the page is open
  const web3ModalRef = useRef();

  /**
   * presaleMint: Mint an NFT during the presale
   */
  
}