import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}-Developed by Praveen</p>
    </footer>
  );
}

export default Footer;
