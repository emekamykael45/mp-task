import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import { conversionRate, keyIndicators } from "../../assets/img";

const FullControl = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const cards = [
    {
      img: conversionRate,
      title: "Improved customer service",
      desc: `Analytics helps optimize service processes by providing information
    on how to improve interactions with customers and increase their
    satisfaction.`,
    },
    {
      img: keyIndicators,
      title: "Monitoring key indicators",
      desc: `Analytics platform allows businesses to track KPIs, an important
    tool for measuring success and achieving goals.`,
    },
  ];

  return (
    <div
      ref={ref}
      className={classNames("full_control_container section", { inView })}
    >
      <h2>
        We give you full <span>control</span> over your data
      </h2>

      <div className="cards">
        {cards.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt="Card img" />

            <div className="info">
              <h6>{item.title}</h6>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullControl;
