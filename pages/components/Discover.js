import React, { useState, useEffect } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { GiCardRandom } from "react-icons/gi";
import { BiDollarCircle } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import Link from "next/link";

const Discover = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a request to the API to retrieve the data
    fetch("http://localhost:3000/api/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section id="discover" className="py-5">
        <div className="container">
          <div className="row">
            <h2 className="display-6 pb-3">Discover</h2>
            <div className="btn-toolbar justify-content-between" role="toolbar">
              <div
                className="d-flex flex-column flex-md-row mb-2 mb-md-0"
                role="group"
              >
                <button
                  type="button"
                  className="btn btn-outline-dark d-flex align-items-center me-0 me-md-2 mb-2 mb-md-0"
                >
                  <BsFillGridFill /> &nbsp; Category
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark d-flex align-items-center me-0 me-md-2 mb-2 mb-md-0"
                >
                  <GiCardRandom /> &nbsp; Collection
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark d-flex align-items-center"
                >
                  <BiDollarCircle /> &nbsp; Price Range
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-dark d-flex align-items-center"
                >
                  <FiFilter /> &nbsp; Filter & Sort
                </button>
              </div>
            </div>

            <div className="nfts row row-cols-1 row-cols-md-4 g-4 p-0 m-0">
              {data.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card h-100">
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <h6 className="card-subtitle mb-4 text-muted">
                        By {item.creator}
                      </h6>
                      <div className="bid d-flex justify-content-between align-items-end">
                        <div>
                          <p className="m-0 text-muted">Current Bid</p>
                          <h6 className="m-0">$ {item.price} ETH</h6>
                        </div>
                        <div>
                          <Link href="/components/Details">
                            <button type="button" className="btn btn-dark">
                              Place A Bid
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
