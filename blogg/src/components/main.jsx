import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-2 text-uppercase fw-bold">
                "Unleash Your Creativity: Start Blogging Now!"
              </h5>
              <p className="card-text fs-6 d-none d-sm-block">
              "Unlock Your Voice,storytime Share Your Story: Welcome to storysort , Where Every Word Matters."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
