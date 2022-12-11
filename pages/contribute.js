import React from "react";
import Navbar from "./components/Navbar";

const Contribute = () => {
  return (
    <>
      <Navbar />
      <section id="contribute" className="pt-4">
        <div className="container-fluid">
          <h2 className="display-5 text-center mb-4">Contribute</h2>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fruit_id" className="form-label">
                    Fruit ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fruit_id"
                  />
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="0"/>
                  <button
                    class="btn btn-outline-dark dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ETH
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>

                <button type="submit" className="btn btn-success">
                  Donate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contribute;
