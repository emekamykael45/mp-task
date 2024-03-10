import { Link } from "react-router-dom";

import Icon from "../assets/svg";

import { APP_NAME } from "../utils/constants";

const Logo = () => (
  <Link to="/" className="logo_container">
    <Icon name="link" />
    <p>{APP_NAME}</p>
  </Link>
);

export default Logo;
