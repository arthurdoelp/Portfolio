import React from "react";
import "./style.css";
import CatButton from "../CatButton";

function Categories(props) {


  return (
    <div className="container ">
      <div className="row categories-container">
        <div className="col-lg-12">
          <h3 className="lead">Filter by Tech Used</h3>
          <div id="selected-buttons-view">
            {props.categoriesState.map(category => (
              <CatButton
                value={category}
                id={category}
                key={category}
                clickFriend={props.clickFriend}
              >{category}</CatButton>
            ))}
          </div>
          <p>________________________________________________________________________________________________________________________________</p>
          <div id="buttons-view">
            {props.categories.map(category => (
              <CatButton
                value={category.name}
                id={category.id}
                key={category.id}
                clickFriend={props.clickFriend}
              >{category.name}</CatButton>
            ))}
            <button className="btn btn-outline-warning" onClick={() => props.clearCategories()}>Clear</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Categories;
