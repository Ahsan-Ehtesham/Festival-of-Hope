import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { GiCardRandom } from "react-icons/gi";
import { BiDollarCircle } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
// import Image from "next/image";

const Discover = () => {
  return (
    <>
      <section id="discover" className="py-5">
        <div className="container">
          <div className="row">
            <h2 className="display-6 pb-3">Discover</h2>
            <div
              class="btn-toolbar justify-content-between"
              role="toolbar"
            >
              <div
                class="d-flex flex-column flex-md-row mb-2 mb-md-0"
                role="group"
              >
                <button
                  type="button"
                  class="btn btn-outline-dark d-flex align-items-center me-0 me-md-2 mb-2 mb-md-0"
                >
                  <BsFillGridFill /> &nbsp; Category
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark d-flex align-items-center me-0 me-md-2 mb-2 mb-md-0"
                >
                  <GiCardRandom /> &nbsp; Collection
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark d-flex align-items-center"
                >
                  <BiDollarCircle /> &nbsp; Price Range
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-outline-dark d-flex align-items-center"
                >
                  <FiFilter /> &nbsp; Filter & Sort
                </button>
              </div>
            </div>

            <div class="nfts row row-cols-1 row-cols-md-4 g-4">
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Apple Mustard</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 14.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1576181177940-cb8592693079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Orange King</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 20.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Mango Masala</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 50.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Pineapple Pine</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 25.19 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nfts row row-cols-1 row-cols-md-4 g-4">
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Apple Mustard</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 14.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1576181177940-cb8592693079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Orange King</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 20.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Mango Masala</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 50.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Pineapple Pine</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 25.19 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nfts row row-cols-1 row-cols-md-4 g-4">
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Apple Mustard</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 14.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1576181177940-cb8592693079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Orange King</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 20.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Mango Masala</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 50.99 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Pineapple Pine</h5>
                    <h6 class="card-subtitle mb-4 text-muted">By AE</h6>
                    <div class="bid d-flex justify-content-between align-items-end">
                      <div>
                        <p className="m-0 text-muted">Current Bid</p>
                        <h6 className="m-0">$ 25.19 ETH</h6>
                      </div>
                      <div>
                        <button type="button" class="btn btn-dark">
                          Place A Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
