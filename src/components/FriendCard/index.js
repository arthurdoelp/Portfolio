import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" href={props.link}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p>{props.description}</p>

        <div className="tech-used">
          <strong>Tech Used:</strong>
          <p>{props.category.join(", ")}</p>
          <div className="text-left">
            <a href={props.github}><img alt="github" src="../../../Images/github.ico" /></a>
            <a href={props.link}><button className="btn btn-outline-secondary ml-3">View App</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
