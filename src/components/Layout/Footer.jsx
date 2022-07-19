import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center item-center container bg-blue-200 py-5 rounded-t-xl">
      <span>
        &copy; <em>{new Date().getFullYear()}</em> Nelsen septa
      </span>
    </footer>
  );
};

export default Footer;
