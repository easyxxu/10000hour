import "./MyInfo.css";

export default function MyInfo() {
  return (
    <article>
      <div className="wrap-ihaveto">
        <p>나는</p>
        <input type="text" placeholder="예)프로그래밍" />
        <p>전문가가 될 것 이다.</p>
      </div>
      <div className="wrap-ihaveto">
        <p>그래서 앞으로 매일 하루에</p>
        <input type="text" placeholder="예)5" />
        <p>시간씩 훈련할 것이다.</p>
      </div>
      <button className="btn-cnt">
        나는 며칠 동안 훈련을 해야 1만 시간이 될까?
      </button>
    </article>
  );
}
