import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <header
      className={`indigo darken-1 section`}
      style={{ marginBottom: "40px" }}
    >
      <h2 className={`center white-text`} style={{ margin: "10px 0" }}>
        {title}
      </h2>
      <p
        className={`flow-text grey-text center text-lighten-2`}
        style={{ margin: "10px 0" }}
      >
        {description}
      </p>
    </header>
  );
};

export default Header;
