import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Details = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a request to the API to retrieve the data
    fetch("http://localhost:3000/api/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Navbar />
      <section id="details" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="product-card">
                <div className="badge">Hot</div>
                <img src={data.img} className="card-img-top" alt="..." />
                <div className="product-details">
                  <span className="product-category">NFT</span>
                  <h4>{data.title}</h4>
                  <p>Sweet juicy apple fresh from farm!</p>
                  <div className="product-bottom-details">
                    <div className="product-price">$ {data.price}</div>
                    <div className="product-links">
                      <a href="">
                        <i className="fa fa-heart"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="subscribe-box">
                <form className="subscribe">
                  <input
                    type="text"
                    placeholder="Add your Input about this Orchard that can help the DAO"
                    autoComplete="off"
                    required="required"
                  />
                  <button type="submit">Stake/Donate</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
