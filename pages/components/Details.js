import React from "react";
import Grid from '@mui/material/Grid'
import Navbar from "./Navbar";


const Details = () => {
  return (
    <>
    <Navbar/>
      <section id="details" className="py-5">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <div className="product-card">
              <div className="badge">Hot</div>
              <img
                src="https://images.unsplash.com/photo-1576181177940-cb8592693079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="product-details">
                <span className="product-catagory">Women,bag</span>
                <h4><a href="">Women leather bag</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                <div className="product-bottom-details">
                  <div className="product-price"><small>$96.00</small>$230.99</div>
                  <div className="product-links">
                    <a href=""><i className="fa fa-heart"></i></a>
                    <a href=""><i className="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="my-auto">
            <div className="subscribe-box">
              <h6></h6>
              <form className="subscribe">
                <input type="text" placeholder="Add your Input about this Orchard that can help the DAO" autoComplete="off" required="required" />
                <button type="submit"> <span>Stake/Delagate</span></button>
              </form>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Details;
