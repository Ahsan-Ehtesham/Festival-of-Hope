import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <section id="header">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-6">
              <h1 className="display-4 fw-bold text-white">
                Sell, Buy, Discover <br /> and Collect NFT Fruits
              </h1>
              <p className="lead fw-bold text-white">
                With its constantly growing community, its never too late for
                you to contribute to this safe haven.
              </p>
              <Link href="/contribute">
                <button className="btn btn-success">Contribute Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
