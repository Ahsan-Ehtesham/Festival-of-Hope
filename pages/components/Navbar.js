import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={100}
                height={50}
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/proposal">
                  <a className="nav-link">Submit Proposal</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contribute">
                  <a className="nav-link">Contribute</a>
                </Link>
              </li>
            </ul>
            <ConnectButton
              label="Connect Wallet"
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
            />
            {/* <button className="btn btn-outline-success" type="submit">
              Connect Wallet
            </button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
