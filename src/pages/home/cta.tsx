import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import Icon from "../../assets/svg";

const CTA = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className={classNames("cta_container section", { inView })}>
      <div className="icon">
        <Icon name="link" />
      </div>

      <h2>Get Started</h2>
      <p>
        Turn information into advantage! Start using Ramos today. Sign up for a
        free trial.
      </p>

      <div className="actions">
        <Link to="/" className="link_btn_grey">
          Request a demo
        </Link>
        <Link to="/" className="link_btn_orange">
          Start for free
        </Link>
      </div>
    </div>
  );
};

export default CTA;
