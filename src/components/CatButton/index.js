import React from "react";
import "./style.css";

function CatButton(props) {


    return (
        <button className="btn btn-outline-primary mr-2 mb-2" value={props.children} onClick={() => props.clickFriend(props.children)}>{props.children}</button>
    );
}

export default CatButton;
