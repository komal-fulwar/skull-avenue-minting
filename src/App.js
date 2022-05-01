import React, { useState, useEffect } from "react";
import { user2 } from "./components/user2";
import { PublicKey } from "@solana/web3.js";
import { cancel } from "./components/cancel";
import "./style.css";
import Header from "./components/header/Header";
import { Timer } from "./components/countdown";

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
          className="header__1 js-headern web"
          id="header"
          style={{ minHeight: "140px", backgroundColor: "#26252a" }}
        >
          <div className="container">
            <div
              className="wrapper js-header-wrapper"
              // style={{ paddingTop: "50px" }}
            >
              <div className="header__logo">
                <a href="/">
                  <img
                    style={{ width: "280px", height: "104px" }}
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
                      className="color_white custom"
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
                      className="color_white custom"
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
                      className="color_white custom"
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
                      className="color_white custom"
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
                      className="color_white custom"
                      href="https://skullavenue.io/community/"
                    >
                      {" "}
                      community
                    </a>{" "}
                  </li>
                </ul>
              </div>

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
        <header
          className="header__1 js-header mobile"
          id="header"
          style={{ minHeight: "66px", backgroundColor: "#26252a" }}
        >
          <div className="container">
            <div className="wrapper js-header-wrapper">
              <div className="header__logo ">
                <a href="/">
                  <img
                    style={{ width: "144px", height: "54px" }}
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
          <div className="  web  mint-header" style={{ minHeight: "600px" }}>
            <video autoPlay muted loop id="myVideo">
              <source
                src={require("./img/Skull_NY_01.mp4").default}
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
            <div
              className="col-12 col-lg-6 mb-5 mb-lg-0"
              style={{
                borderRadius: "15px",
                backgroundColor: "#26252bde",
                padding: "40px",
                top: "20%",
                left: "50%",
                position: "absolute",
                wordWrap: "break",
                width: "650px",
              }}
            >
              <span
                style={{
                  fontFamily: "boston",
                  color: "#f8c307",
                  textShadow: "2px 2px black",
                }}
                className="display-5 fw-bold mb-5"
                data-config-id="header"
              >
                GET YOUR SKULL NOW
              </span>
              <p
                style={{
                  fontFamily: "Aldrich",
                  color: "white",
                }}
                className="lead  mb-5"
                data-config-id="desc"
              >
                Skullavenue is a community of 4.444 unique full-body NFTs,
                living in between the realm of what has been and what is yet to
                come. Skullavenue has embarked on an ever-lasting journey,
                travelling through the Solana universe. Skulls are often seen as
                a symbol of death, confronting us with our mortality. This very
                mortality connects all of us living on planet earth and those
                who have physically left us. In addition, the skull is an
                attribute that all humans have in common. No matter who you are
                or where you come from, you carry one. We are all the same, yet
                unique.
              </p>

              <a
                href="#mint"
                style={{
                  fontSize: "18px",
                  padding: " 20px 40px",
                  fill: "black",
                  color: "white",
                  backgroundColor: "#f8c307",
                  fontFamily: "Aldrich",
                  fontWeight: "bold",
                  borderRadius: " 5px",
                }}
              >
                Mint Now
              </a>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="community">
            <div className="section__head space-y-20 text-center">
              <span
                style={{
                  fontFamily: "boston",
                  color: "#f8c307",
                  fontSize: "44px",
                  textShadow: "2px 2px black",
                }}
                className="section__title text-center"
              >
                THE SALE ENDS
              </span>
              <p
                style={{
                  fontFamily: "Aldrich",
                  color: "white",
                }}
                className="section__text text-center"
              >
                <Timer />
              </p>
            </div>
            {/* <div className="section__head space-y-20 text-center">
              <span
                style={{
                  fontFamily: "boston",
                  color: "black",
                }}
                className="section__title text-center"
              >
                FACTS
              </span>
              <p
                style={{
                  fontFamily: "Aldrich",
                  color: "white",
                }}
                className="text-center"
              >
                <span
                  style={{
                    fontFamily: "Aldrich",
                    color: "white",
                    borderRight: "solid 2px black ",
                    marginRight: "25px",
                  }}
                >
                  Unique pieces: 4444{" "}
                </span>
                Attributes: 160{" "}
              </p>
            </div> */}
          </div>
          <div id="mint" className="box in__upload mb-120">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <video
                    autoPlay
                    controls
                    controlsList="nodownload"
                    muted
                    loop
                    id="outer"
                  >
                    <source
                      src={require("./img/promo_game_06.mp4").default}
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
                <h2
                  class="text-center"
                  style={{ fontSize: "15px", color: "black" }}
                >
                  *This NFT will give you access to the Skullavenue game when it
                  launches.*
                </h2>
              </div>

              <div className="col-lg-6">
                <div className="form-group space-y-10  ">
                  <div className="space-y-20">
                    <div className="space-y-10 text-center">
                      <p
                        className="nameInput "
                        style={{
                          fontFamily: "boston",
                          color: "black",
                          fontSize: "44px",
                        }}
                      >
                        SKULL AVENUE
                      </p>
                    </div>

                    <p
                      style={{
                        fontFamily: "Aldrich",
                        color: "black",
                        fontSize: "20px",
                      }}
                      className="section__text text-center"
                    >
                      <span
                        style={{
                          fontFamily: "boston",
                          color: "black",
                          fontSize: "20px",
                        }}
                      >
                        {" "}
                        Available in the Public sale
                      </span>
                      :
                      <ul>
                        {" "}
                        <li>Total NFTs 2333</li>
                        <li>7 of the Magnificent nine </li>
                        <li>8 of the eleven WANTED</li>
                      </ul>{" "}
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
                            backgroundColor: "#26252b",
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
                            backgroundColor: "#26252b",
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
                  0.187% / 0.00204 SOL
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
                    You will receive :
                  </span>{" "}
                  1 SKA for 1.1 SOL
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="community">
            <div className="section__head space-y-20 text-center">
              <span
                style={{
                  fontFamily: "boston",
                  color: "#f8c307",
                  fontSize: "44px",
                  textShadow: "2px 2px black",
                }}
                className="section__title text-center"
              >
                OUR HANGOUTS
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
                  <a
                    href="https://twitter.com/Skullavenue_io"
                    target={"_blank"}
                  >
                    <div
                      className="item space-y-10"
                      style={{ backgroundColor: "#26252b" }}
                    >
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
                  </a>
                </div>

                <div className="col-md-3">
                  <a
                    href="https://discord.com/invite/2DXcDWABk7"
                    target={"_blank"}
                  >
                    <div
                      className="item space-y-10 "
                      style={{ backgroundColor: "#26252b" }}
                    >
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
                        JOIN OUR DISCORD SERVER FOR IMPORTANT UPDATES.
                      </p>
                    </div>
                  </a>
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
      <h6 class="text-center ">
        <span class="text-white" style={{ fontFamily: "Aldrich" }}>
          Copyright © 2021 Mil Beats | Delivered by AngolaTech
        </span>
      </h6>
      <br />
    </div>
  );
};
export default App;
