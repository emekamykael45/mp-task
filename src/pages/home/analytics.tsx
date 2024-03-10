import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import Icon from "../../assets/svg";

import { statistics, user1, user2 } from "../../assets/img";

const StatChange = () => {
  return (
    <div className="stat_change">
      <Icon name="arrow" />
      <p>+14%</p>
    </div>
  );
};

const Analytics = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const progressValue: number = (56000 / 264200) * 100;

  return (
    <div ref={ref} className={classNames("analytics_container", { inView })}>
      <div className="section">
        <div className="header">
          <h3>Your key to strategic success through analytics</h3>
          <p>
            Ready for exciting, instantaneous, all-accessible insights in
            realtime?
          </p>
        </div>

        <div className="cards">
          <div className="card_white">
            <div className="d_flex">
              <div className="info">
                <p className="tag">Setting up reports</p>

                <div>
                  <h5>Fast and easy access to analytics</h5>
                  <p className="text">
                    One platform is a comprehensive system of solutions that
                    will be the first step towards digitalization of your
                    business!
                  </p>
                </div>
              </div>

              <div className="statistics">
                <h6>Sales statistic</h6>

                <div className="flex">
                  <div className="stat">
                    <Icon name="stackCircle" />

                    <div>
                      <p className="label">Total profit</p>
                      <p className="value">
                        <span>$</span>264,2K
                      </p>
                    </div>
                  </div>

                  <div className="visitors">
                    <p className="label">Visitors</p>

                    <div className="progress">
                      <div
                        className="progress_value"
                        style={{ width: `${progressValue}px` }}
                      ></div>
                    </div>

                    <div className="value">
                      <p>56K</p>
                      <StatChange />
                    </div>
                  </div>
                </div>

                <div className="chart_container">
                  <img src={statistics} alt="" />

                  <div className="rate">
                    <div className="header">
                      <p>Rate</p>
                      <Icon name="setting" />
                    </div>

                    <div className="value">
                      <p>+58%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card_black">
            <div className="stats">
              <div className="stat customers">
                <Icon name="stack" />

                <div className="images">
                  <img src={user1} alt="User" />
                  <img src={user2} alt="User" />
                </div>
              </div>

              <div className="stat info">
                <p className="label">Transactions</p>

                <div className="value">
                  <p>43K</p>
                  <StatChange />
                </div>
              </div>
            </div>

            <h5>Widget control</h5>
            <p className="text">
              Reports provide a comprehensive overview of important aspects of
              web analytics
            </p>
          </div>
        </div>

        <div className="upto_stats">
          <h6>Up to</h6>
          <h2>45%</h2>
          <p>
            Increase your analytics efficiency by up to 45%. Unique algorithms
            provide insights from data, reduce time for analysis and save time
            for making important, informed decisions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
