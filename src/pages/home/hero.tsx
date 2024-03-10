import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import { hero } from "../../assets/img";

import Icon from "../../assets/svg";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className={classNames("hero_container section", { inView })}>
      <div className="d_flex">
        <div>
          <div className="analytics_and_icons">
            <div className="icons">
              <Icon name="flash" />
              <Icon name="dotLineChart" />
            </div>
            <h1 className="text">Analytics</h1>
          </div>
          <h1 className="text second_line">
            that <span>helps</span> you
          </h1>
        </div>

        <div className="hero_image">
          <Icon name="play" />
          <img src={hero} alt="Hero img" />
        </div>
      </div>

      <h1 className="text last_line">
        shape <Icon name="barChart" /> the future
      </h1>
    </div>
  );
};

export default Hero;
