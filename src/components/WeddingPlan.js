function WeddingPlan(props) {
  return (
    <div className="wedding-plan">
      {props.weddingPlanData.map((plan, index) => (
        <div className={plan.class} key={index}>
          {Array.isArray(plan.icon) ? (
            plan.icon.map((icon, i) => (
              <img className="icons" key={i} src={icon} alt={`icon-${i}`} />
            ))
          ) : (
            <img className="icons" src={plan.icon} alt="icon" />
          )}
          <span className="time">{plan.time}</span>
          <span>{plan.text}</span>
        </div>
      ))}
    </div>
  );
}

export default WeddingPlan;
