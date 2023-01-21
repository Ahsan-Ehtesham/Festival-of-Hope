import React from "react";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";

const Details = () => {
  return (
    <>
      <Navbar />
      <section id="details" className="py-5">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <div className="product-card">
              <div className="badge">Hot</div>

              {/* <img src={item.img} className="card-img-top" alt="..." /> */}

              <div className="product-details">
                <span className="product-category">Women,bag</span>
                <h4>hello</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vero, possimus nostrum!
                </p>
                <div className="product-bottom-details">
                  <div className="product-price">
                    <small>$96.00</small>$230.99
                  </div>
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
          </Grid>

          <Grid item xs={4} className="my-auto">
            <div className="subscribe-box">
              <form className="subscribe">
                <input
                  type="text"
                  placeholder="Add your Input about this Orchard that can help the DAO"
                  autoComplete="off"
                  required="required"
                />
                <button type="submit">
                  {" "}
                  <span>Stake/Delagate</span>
                </button>
              </form>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Details;
