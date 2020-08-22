import React, { useState, useEffect} from 'react';
import "../scss/Sidebar.scss";

const showType = (types) => {
  let result = null;
  result = types.map((type, i) => {
    return <SidebarType key={i} type={type.type} />
  });
  return result;
}

const Sidebar = (props) => {
  const [products, setProducts] = useState(props.products);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/types");
    // request state change event
    xhr.onreadystatechange = function () {
      // request completed?
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        // request successful - show response
        setTypes(JSON.parse(xhr.responseText));
      } else {
        // request error
        console.log("HTTP error", xhr.status, xhr.statusText);
      }
    };
    // start request
    xhr.send();
  }, []);

  return(
    <sidebar className="sidebar">
      <a
        href=""
        className="sidebar__clear"
      >
        <i className="fa fa-eraser"></i>
        <span>Clear all filters</span>
      </a>
      <p className="sidebar__title">Show results for</p>
      <div className="sidebar__category">
          {showType(types)}
      </div>
      <p className="sidebar__title">Refine by</p>
      <div className="sidebar__Refine">
          <SidebarRefine />
      </div>
    </sidebar>
  )
}

const SidebarType = (props) => {
  return (
    <a className="sidebar__category__link">
      <i className="fas fa-angle-right"></i>
      <span>{props.type}</span>
    </a>
  );
};

const SidebarRefine = (props) => {
  return (
    <form>
      <p>Star</p>
      <SidebarRefineStar />
    </form>
  );
}

const SidebarRefineStar = (props) => {
  return (
    <div className="star">
      <div className="star_rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <div className="star_rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <div className="star_rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <div className="star_rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <div className="star_rating">
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
    </div>
  )
}

export default Sidebar;