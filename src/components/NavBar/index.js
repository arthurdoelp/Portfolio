import React from "react";
import "./style.css";

// messageCorrectAni(() => {
//   document.getElementById('h5').className ='message';
// }
// const message = correct ? correctMsgAni() : incorrectMsgAni();

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Arthur Doelp's Portfolio</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="nav-link" href="https://www.arthurdoelp.com/">Home</a>

      {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div> */}
    </nav>
  );


}

export default NavBar;
