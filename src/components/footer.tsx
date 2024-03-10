import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import { qrCode } from "../assets/img";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const links = [
    { to: "/", label: "About" },
    { to: "/", label: "Why Us" },
    { to: "/", label: "Platform" },
    { to: "/", label: "Pricing" },
    { to: "/", label: "Contacts" },
    { to: "/", label: "Privacy policy" },
    { to: "/", label: "License agreement" },
  ];

  const addresses = [
    {
      name: "Warrensville Heights",
      street: "14418 Vineyard Drive, NC",
      zip: "44128",
    },
    { name: "Saint Louis", street: "1366 Penn Street", zip: "63101" },
  ];

  const socials = [
    {
      to: "https://www.linkedin.com/in/chukwuemeka-azonobi-026a1312b/",
      label: "LinkedIn",
    },
    { to: "https://www.instagram.com/", label: "Instagram" },
    { to: "https://www.facebook.com/", label: "Facebook" },
  ];

  return (
    <div
      ref={ref}
      className={classNames("footer_container section", { inView })}
    >
      <div className="top_links">
        <div className="links">
          {links?.slice(0, 5).map((item, index) => (
            <Link key={index} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        <a className="email" href="mailto:hello@ramos.com">
          hello@ramos.com
        </a>
      </div>

      <div className="address_and_socials">
        <div className="addresses">
          {addresses.map((item, index) => (
            <div key={index} className="item">
              <h6>{item.name}</h6>
              <p>{item.street}</p>
              <p>{item.zip}</p>
            </div>
          ))}
        </div>

        <div className="socials">
          {socials.map((item, index) => (
            <a key={index} href={item.to} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="others">
        <h2>
          Ramos<span>®</span>
        </h2>

        <div className="links">
          {links?.slice(5, 7).map((item, index) => (
            <Link key={index} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        <img src={qrCode} className="qr_code" alt="QR Code" />
      </div>
    </div>
  );
};

export default Footer;
