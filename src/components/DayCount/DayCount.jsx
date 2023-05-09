import "./DayCount.css";
export default function DayCount({ expert, time }) {
  return (
    <section className="section-count">
      <div className="wrap-count">
        당신은 <span>{expert}</span> 전문가가 되기 위해서
      </div>
      <div className="wrap-count">
        대략 <span>{time}</span> 일 이상 훈련하셔야 합니다! :&#41;
      </div>
    </section>
  );
}
