import React from "react";
import Navbar from "./components/Navbar";

const Proposal = () => {
  return (
    <>
      <Navbar />
      <section id="proposal" className="py-5">
        <div className="container">
          <div class="card">
            {/* <div className="card-header text-center">
              <h2 className="display-5">Add Fruit Details</h2>
            </div> */}
            <div className="card-body">
              <form>
                <div class="mb-3">
                  <label for="img_file" class="form-label">
                    Add Image
                  </label>
                  <input class="form-control" type="file" id="img_file" />
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <label for="fruit_name" class="form-label">
                      Fruit Name
                    </label>
                    <input type="text" class="form-control" id="fruit_name" />
                  </div>
                  <div class="col">
                    <label for="owner_name" class="form-label">
                      Owner Name
                    </label>
                    <input type="text" class="form-control" id="owner_name" />
                  </div>
                </div>

                <div class="mb-3">
                  <label for="desc" class="form-label">
                    Description
                  </label>
                  <input type="text" class="form-control" id="desc" />
                </div>
                <div class="mb-3">
                  <label for="wallet_add" class="form-label">
                    Fruit Wallet Address
                  </label>
                  <input type="text" class="form-control" id="wallet_add" />
                </div>
                <div class="mb-3">
                  <label for="price" class="form-label">
                    Price
                  </label>
                  <input type="text" class="form-control" id="price" />
                </div>

                <button type="submit" class="btn btn-success">
                  Submit
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
