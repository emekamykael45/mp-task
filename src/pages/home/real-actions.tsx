import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import Icon from "../../assets/svg";
import { mobile, tablet } from "../../assets/img";

import { APP_NAME } from "../../utils/constants";

const RealActions = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const list = ["Instant Insights", "AI technology", "Easy integration"];

  return (
    <div ref={ref} className={classNames("real_actions_container", { inView })}>
      <div className="section">
        <div className="d_flex">
          <div>
            <h4>Turning data into real actions and ideas.</h4>

            <div className="list">
              {list.map((item, index) => (
                <div key={index} className="item">
                  <p>{item}</p>
                  <Icon name="plus" />
                </div>
              ))}
            </div>
          </div>

          <div className="images">
            <img src={mobile} className="mobile" alt="Mobile screenshot" />
            <img src={tablet} className="tablet" alt="Tablet screenshot" />
          </div>
        </div>

        <div className="text_background">
          <p>{APP_NAME}</p>
        </div>
      </div>
    </div>
  );
};

export default RealActions;
