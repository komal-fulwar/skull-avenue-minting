import React, { useState, useEffect } from "react";
import { user2 } from "./components/user2";
import { PublicKey } from "@solana/web3.js";
import { cancel } from "./components/cancel";
import "./style.css";
import Header from "./components/header/Header";

const App = () => {
  const [count, setCount] = useState();
  const [pubKey, setPubKey] = useState();

  /////////////////////////////////////////////////////////////Connections////////////////////////////////////////////
  const getConnectedWallet = async () => {
    const provider = await window.solana;
    if (provider) {
      setPubKey(provider.publicKey);
      localStorage.setItem("pubKey", provider.publicKey);
    } else console.log("Try to connect again");
  };

  const connectWallet = async () => {
    const provider = window.solana;
    console.log(provider);
    if (provider) {
      setCount(count + 1);
      await window.solana.connect();
      window.solana.on("connect", () => console.log("connect"));
      getConnectedWallet();
    } else window.open("https://phantom.app/", "_blank");
  };

  const disconnectWallet = () => {
    window.solana.disconnect();
    localStorage.removeItem("pubKey");
    setPubKey();
  };
  console.log(pubKey, "dddd");

  return (
    <div>
      <div>
        {" "}
        <header
          className="header__1 js-header"
          id="header"
          style={{ minHeight: "181px", backgroundColor: "#201a14" }}
        >
          <div className="container">
            <div
              className="wrapper js-header-wrapper"
              style={{ paddingTop: "50px" }}
            >
              <div className="header__logo">
                <a href="/">
                  <img
                    style={{ width: "250px", height: "94px" }}
                    className="header__logo"
                    id="logo_js"
                    src="https://skullavenue.io/wp-content/uploads/2021/12/Schild_02.png"
                    alt="logo"
                  />
                </a>
              </div>

              <div className="header__menu">
                <ul className="d-flex space-x-20">
                  <li>
                    {" "}
                    <a
                      style={{ fontFamily: "boston" }}
                      className="color_white"
                      href="https://skullavenue.io/"
                    >
                      {" "}
                      Home
                    </a>{" "}
                  </li>
                  <div className="vl"></div>
                  <li>
                    <a
                      style={{ fontFamily: "boston" }}
                      className="color_white"
                      href="https://skullavenue.io/roadmap/"
                    >
                      {" "}
                      RoadMap
                    </a>{" "}
                  </li>
                  <div className="vl"></div>
                  <li>
                    {" "}
                    <a
                      style={{ fontFamily: "boston" }}
                      className="color_white"
                      href="https://skullavenue.io/"
                    >
                      {" "}
                      Collection
                    </a>{" "}
                  </li>
                  <div className="vl"></div>
                  <li>
                    {" "}
                    <a
                      style={{ fontFamily: "boston" }}
                      className="color_white"
                      href="https://skullavenue.io/attributes/"
                    >
                      Attributes
                    </a>
                  </li>
                  <div className="vl"></div>
                  <li>
                    {" "}
                    <a
                      style={{ fontFamily: "boston" }}
                      className="color_white"
                      href="https://skullavenue.io/community/"
                    >
                      {" "}
                      community
                    </a>{" "}
                  </li>
                </ul>
              </div>
              {/* 
            {provider && !walletKey && (
              <div className="header__btns">
                <a
                  style={{
                    fontSize: "18px",
                    padding: " 20px 40px",
                    fill: "black",
                    color: "black",
                    backgroundColor: "#f8c307",
                    fontFamily: "boston",
                    borderRadius: " 5px",
                  }}
                  onClick={connectWallet}
                >
                  Connect wallet
                </a>
              </div>
            )}
            {provider && walletKey && (
              <div
                className="header__avatar"
                style={{
                  fontSize: "18px",
                  width: "14rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "inline-block",
                  fill: "black",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  paddingLeft: "0.4rem",
                  color: "black",
                  backgroundColor: "#f8c307",
                  fontFamily: "boston",
                  borderRadius: " 5px",
                }}
              >
                <div className=" text-centre">
                  <span style={{ color: "black" }}>
                    {provider && walletKey && (
                      <p style={{ color: "black" }}> {walletKey}</p>
                    )}
                  </span>
                </div>

                <div className="avatar_popup space-y-20">
                  <div className="d-flex align-items-center justify-content-between">
                    <span> 13b9ebda035r178... </span>
                    <a href="/" className="ml-2">
                      <i className="ri-file-copy-line"></i>
                    </a>
                  </div>
                  <div className="d-flex align-items-center space-x-10">
                    <img
                      className="coin"
                      src="assets/img/logos/coin.svg"
                      alt="/"
                    />
                    <div className="info">
                      <p className="text-sm font-book text-gray-400">Balance</p>
                      <p className="w-full text-sm font-bold text-green-500">
                        16.58 ETH
                      </p>
                    </div>
                  </div>
                  <div className="hr"></div>
                  <div className="links space-y-10">
                    <a href="#">
                      <i className="ri-landscape-line"></i>{" "}
                      <span> My items</span>
                    </a>
                    <a href="edit_profile.html">
                      <i className="ri-pencil-line"></i>{" "}
                      <span> Edit Profile</span>
                    </a>
                    <div className="btn" onClick={disconnectWallet}>
                      <i className="ri-logout-circle-line"></i>{" "}
                      <span> Disconnect</span>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
              {!pubKey ? (
                <div className="header__btns">
                  <a
                    onClick={connectWallet}
                    style={{
                      fontSize: "18px",
                      padding: " 20px 40px",
                      fill: "black",
                      color: "black",
                      backgroundColor: "#f8c307",
                      fontFamily: "boston",
                      borderRadius: " 5px",
                    }}
                  >
                    Connect wallet
                  </a>
                </div>
              ) : (
                <div className="header__btns">
                  <a
                    onClick={disconnectWallet}
                    style={{
                      fontSize: "18px",
                      width: "14rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "inline-block",
                      fill: "black",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      paddingLeft: "0.4rem",
                      color: "black",
                      backgroundColor: "#f8c307",
                      fontFamily: "boston",
                      borderRadius: " 5px",
                    }}
                  >
                    {pubKey.toString()}
                  </a>
                </div>
              )}

              <div className="header__burger js-header-burger"></div>

              <div className="header__mobile js-header-mobile">
                <div className="header__mobile__menu space-y-40">
                  <ul className="d-flex space-y-20">
                    <li>
                      {" "}
                      <a className="color_black" href="https://skullavenue.io/">
                        {" "}
                        Home
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="color_black" href="https://skullavenue.io/">
                        {" "}
                        RoadMap
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="color_black" href="#">
                        {" "}
                        Collection
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="color_black" href="https://skullavenue.io/">
                        {" "}
                        Attributes
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="color_black" href="#">
                        community
                      </a>
                    </li>
                  </ul>
                  {/* <li>
            <a
              className="btn btn-grad btn-sm"
              style={{ padding: "15px" }}
              href="Connect-wallet.html"
            >
              <i className="ri-wallet-3-line"></i>
              Connect wallet
            </a>
            <a href="">
              <img
                width="45"
                src="https://phantom.app/apple-touch-icon.png"
                alt=""
              />
            </a>
          </li> */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div>
        {" "}
        <section>
          <div className="container  pt-5">
            <div className="row row justify-content-center sm:space-y-20 ">
              <div className="col-12 col-lg-5 mb-5 mb-lg-0">
                <span
                  style={{ fontFamily: "boston", color: "black" }}
                  className="display-4 fw-bold mb-5"
                  data-config-id="header"
                >
                  take me in
                </span>
                <p
                  style={{
                    fontFamily: "Aldrich",
                    color: "white",
                  }}
                  className="lead  mb-5"
                  data-config-id="desc"
                >
                  Skull avenue has a population of people coming from various
                  types of backgrounds. They move around frequently, because of
                  the NFT climate. Each person is unique. Each have their own
                  personality type and each super valuable. However, the people
                  of skull avenue have always been secret about their way of
                  life, but for the first time, they will open to the public and
                  will storm the world of NFTs.
                </p>
                <div className="space-y-0">
                  <div className="header__btns ">
                    <a
                      href="#mint"
                      style={{
                        fontSize: "18px",
                        padding: " 20px 40px",
                        fill: "black",
                        color: "white",
                        backgroundColor: "#0c1b27",
                        fontFamily: "boston",
                        borderRadius: " 5px",
                      }}
                    >
                      Mint Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                <img
                  className="img-fluid"
                  src={require("./img/mint_gif.gif").default}
                  alt=""
                  data-config-id="image"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="community">
            <div className="section__head space-y-20 text-center">
              <span
                style={{ fontFamily: "boston", color: "black" }}
                className="section__title text-center"
              >
                GET YOUR SKULL NOW
              </span>
              <p
                style={{
                  fontFamily: "Aldrich",
                  color: "white",
                }}
                className="section__text text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div id="mint" className="box in__upload mb-120">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="card__item one three"
                  style={{
                    background: "rgba(255, 255, 255, 0.155",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10.2px)",
                    WebkitBackdropFilter: "blur(10.2px)",
                  }}
                >
                  <div className="card_body">
                    <div className="card_head" style={{ maxHeight: "600px" }}>
                      <a href="Item-details.html">
                        <img
                          style={{ objectFit: "cover" }}
                          src={require("./img/Promo-video.gif").default}
                          alt="..."
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group space-y-10">
                  <div className="space-y-20">
                    <div className="space-y-10 text-center">
                      <span
                        className="nameInput "
                        style={{
                          fontFamily: "boston",
                          color: "black",
                          fontSize: "34px",
                        }}
                      >
                        SKULL AVENUE
                      </span>
                    </div>

                    <p
                      style={{
                        fontFamily: "Aldrich",
                        color: "white",
                      }}
                      className="section__text text-center"
                    >
                      The collection includes eleven Wanted on the run. Somehow
                      the prisoners escaped the Skullavenue state prison and are
                      hiding among the other people of Skullavenue on the Solana
                      blockchain. Whoever catches them will be rewarded with an
                      additional NFT.
                    </p>
                    {/* <div className="space-y-10">
                    <span className="variationInput text-center">Price</span>
                    <select
                      className="form-select custom-select"
                      aria-label="Default select example"
                    >
                      <option>00.00 SOL</option>
                    </select>
                  </div> */}
                    <br></br>

                    {!pubKey ? (
                      <div className="header__btns text-center">
                        <a
                          style={{
                            fontSize: "18px",
                            padding: " 20px 40px",
                            fill: "black",
                            color: "white",
                            backgroundColor: "#0c1b27",
                            fontFamily: "boston",
                            borderRadius: " 5px",
                          }}
                          onClick={connectWallet}
                        >
                          Connect wallet
                        </a>
                      </div>
                    ) : (
                      <div className="header__btns text-center">
                        <a
                          style={{
                            fontSize: "18px",
                            padding: " 20px 40px",
                            fill: "black",
                            color: "white",
                            backgroundColor: "#0c1b27",
                            fontFamily: "boston",
                            borderRadius: " 5px",
                          }}
                          onClick={() => user2(pubKey)}
                        >
                          Mint
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <br></br>
                <p
                  style={{
                    fontFamily: "Aldrich",
                    color: "white",
                  }}
                  className="color_black text-center"
                >
                  <span
                    style={{
                      fontFamily: "Aldrich",
                      color: "white",
                    }}
                    className="color_text text-bold"
                  >
                    {" "}
                    Service fee :{" "}
                  </span>
                  0.00%
                </p>
                <p
                  style={{
                    fontFamily: "Aldrich",
                    color: "white",
                  }}
                  className="color_black text-center"
                >
                  <span
                    style={{
                      fontFamily: "Aldrich",
                      color: "white",
                    }}
                    className="color_text text-bold"
                  >
                    You will receive
                  </span>
                  .00 SOL $0.00
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="community">
            <div className="section__head space-y-20 text-center">
              <span
                style={{ fontFamily: "boston", color: "black" }}
                className="section__title text-center"
              >
                Community
              </span>
              <p
                style={{
                  fontFamily: "Aldrich",
                  color: "white",
                }}
                className="section__text text-center"
              >
                BECOME A PART OF THE COMMUNITY BY JOINING US ON DISCORD AND
                TWITTER.
              </p>
            </div>

            <div className="community__items">
              <div className="row justify-content-center mb-20_reset">
                <div className="col-md-3">
                  <div className="item space-y-10">
                    <div className="logo is_twitter">
                      <img
                        src="https://raroin.creabik.com/assets/img/icons/twitter.svg"
                        alt="logo_community"
                      />
                    </div>
                    <h5 className="text-center">Twitter</h5>
                    <p
                      style={{
                        fontFamily: "Aldrich",
                        color: "white",
                      }}
                      className="text-center"
                    >
                      FOLLOW US ON TWITTER TO GET THE LATEST UPDATES.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item space-y-10">
                    <div className="logo is_discord">
                      <img
                        src="https://raroin.creabik.com/assets/img/icons/discord.svg"
                        alt="logo_community"
                      />
                    </div>
                    <h5 className="text-center">Discord</h5>
                    <p
                      style={{
                        fontFamily: "Aldrich",
                        color: "white",
                      }}
                      className="text-center"
                    >
                      JOIN OUR DISCORD SERVER FOR IMPORTANT UPDATES
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      {/* <h1>Hey: {pubKey ? pubKey.toString() : ""}</h1>
      <br />
      <button>Connect Here!</button>
      <button onClick={disconnectWallet}>Disconnect Here!</button>
      <br />
      <br /> */}

      {/* <button>User 2</button> */}
      {/* <br />
    
      <button onClick={() => cancel(pubKey)}>cancel</button> */}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default App;
