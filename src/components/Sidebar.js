import React, { useState, useEffect} from 'react';
import "../scss/Sidebar.scss";

const Sidebar = () => {
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
          <SidebarType />
          <SidebarType />
          <SidebarType />
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
    <a href="" className="sidebar__category__link">
      <i className="fas fa-angle-right"></i>
      <span>Ngo Thi Huong</span>
    </a>
  );
};

const SidebarRefine = (props) => {
  return (
    <form>
      <p>Type</p>
      <SidebarRefineType />
      <SidebarRefineType />
      <SidebarRefineType />
      <p>Star</p>
      <SidebarRefineStar />
    </form>
  );
}

const SidebarRefineType = (props) => {
  return (
    <label for="a"> <input type="checkbox" id="a" value="Trend cases(457)" />Trend cases(457)</label>
  )
}

const SidebarRefineStar = (props) => {
  return (
    <div className="star">
      <div className="star_rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div className="star_rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div className="star_rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div className="star_rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div className="star_rating">
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </div>
    </div>
  )
}

export default Sidebar;