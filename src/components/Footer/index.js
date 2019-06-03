import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div>
      <div className="footer">
      <h5>Arthur Doelp's Portfolio</h5>
        <a href="https://github.com/arthurdoelp"><img alt="github" src="../../../Images/github.ico" /></a>
        <a href="mailto:doelp.a@husky.neu.edu?Subject=Hello"><img alt="email" src="../../../Images/Email.png" /></a>
        <a href="https://www.facebook.com/arthur.doelp"><img alt="facebook" src="../../../Images/Facebook.png" /></a>
        <a href="https://twitter.com/arthurdoelp"><img alt="twitter" src="../../../Images/Twitter.png" /></a>
        <a href="https://www.linkedin.com/in/arthurdoelp/"><img alt="linkedin" src="../../../Images/Linkedin.png" style={{width:"35px"}} /></a>
      </div>
    </div>
  );
}

export default Footer;
