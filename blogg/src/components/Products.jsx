import React, { useState, useEffect } from "react";
 
import { useDispatch, useSelector } from "react-redux";
import { addBookmark ,removeBookmark} from "../redux/reducer/handleCart";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import ObjData from "../Objdata";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

   
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
 
  const handleBookmark = (id) => {
    const itemToAdd = data.find(item => item.id === id);
    const isBookmarked = bookmarks.some(item => item.id === id);
  
    if (isBookmarked) {
      // If the product is already bookmarked, remove it from bookmarks
      dispatch(removeBookmark({ id }));
    } else {
      // If the product is not bookmarked, add it to bookmarks
      dispatch(addBookmark(itemToAdd));
    }
  };
  

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setData(ObjData);
      setFilter(ObjData);
      setLoading(false);
    };

    if (componentMounted) {
      getProducts();
    }

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = ObjData.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Art")}>Art</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Fashion")}>Fashion</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Home Decor")}>Home Decor</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.img}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name}
                  </h5>
                  <p className="card-text">
                    {product.desc.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item lead">$ {product.price}</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Read More
                  </Link>
                  <button className="btn btn-dark m-1"  onClick={() => handleBookmark(product.id)}>
                    Bookmark 
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">TOP  BLOGS</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
