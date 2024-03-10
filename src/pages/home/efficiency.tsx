import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import Icon from "../../assets/svg";

const Efficiency = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={classNames("efficiency_container section", { inView })}
    >
      <h2>
        Maximize <span>efficiency</span> with our intuitive
      </h2>

      <div className="stats">
        <div className="icon_and_text">
          <Icon name="boxLineChart" />

          <div className="circle">
            <h5>45%</h5>
            <p>System grow faster</p>
          </div>
        </div>

        <div className="vertical_scroll">
          <p>analytics service</p>
        </div>
      </div>

      <hr />

      <div className="text_and_actions">
        <p>
          Explore traffic sources, page behaviour, conversions and more to gain
          deep insight into your audience. With us, your business doesn't just
          adapt - it evolves
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
    </div>
  );
};

export default Efficiency;
