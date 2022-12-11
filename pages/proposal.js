import React from "react";
import Navbar from "./components/Navbar";

const Proposal = () => {
  return (
    <>
      <Navbar />
      <section id="proposal" className="pt-4">
        <div className="container-fluid">
          <h2 className="display-5 text-center mb-4">Add Fruit Details</h2>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="img_file" className="form-label">
                    Add Image
                  </label>
                  <input className="form-control" type="file" id="img_file" />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label for="fruit_name" className="form-label">
                      Fruit Name
                    </label>
                    <input type="text" className="form-control" id="fruit_name" />
                  </div>
                  <div className="col">
                    <label for="owner_name" className="form-label">
                      Owner Name
                    </label>
                    <input type="text" className="form-control" id="owner_name" />
                  </div>
                </div>

                <div className="mb-3">
                  <label for="desc" className="form-label">
                    Description
                  </label>
                  <input type="text" className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                  <label for="wallet_add" className="form-label">
                    Fruit Wallet Address
                  </label>
                  <input type="text" className="form-control" id="wallet_add" />
                </div>
                <div className="mb-3">
                  <label for="price" className="form-label">
                    Price
                  </label>
                  <input type="text" className="form-control" id="price" />
                </div>

                <button type="submit" className="btn btn-success">
                  Submit Proposal
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proposal;
