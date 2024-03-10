import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import Logo from "./logo";

const Navbar = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const links = [
    { label: "Dashboard", to: "/" },
    { label: "Reports", to: "/" },
    { label: "Documents", to: "/" },
    { label: "History", to: "/" },
    { label: "Settings", to: "/" },
  ];

  return (
    <div ref={ref} className={classNames("navbar_container", { inView })}>
      <Logo />

      <div className="links">
        {links?.map((item, index) => (
          <Link key={index} to={item.to}>
            {item.label}
          </Link>
        ))}
      </div>

      <Link to="/" className="link_btn_white">
        Sign Up
      </Link>
    </div>
  );
};

export default Navbar;
