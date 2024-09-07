// import React from "react";
import { useSelector } from "react-redux";
import { Footer, Navbar } from "../components";
import React, { useState, useEffect } from "react";
 
// import { useDispatch, useSelector } from "react-redux";
// import { addBookmark } from "../redux/reducer/handleCart";
// import { addCart } from "../redux/action";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import ObjData from "../Objdata";

const Bookmark = () => {
  // Access bookmarked items from Redux store
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Bookmark</h1>
        <hr />
        <div className="row">
          {bookmarks.map((item) => (
            <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={item.id}>
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={item.img}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc.substring(0, 90)}...</p>
                </div>
                <ul className="list-group list-group-flush">
             
                </ul>
                <div className="card-body">
                  {/* Add any additional actions or buttons for each bookmarked item */}
                  <Link to={"/product/" + item.id} className="btn btn-dark m-1">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        
      </div>
      <Footer />
    </>
  );
};

export default Bookmark;
