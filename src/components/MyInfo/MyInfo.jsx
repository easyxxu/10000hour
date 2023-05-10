// import { useState } from "react";
import "./MyInfo.css";
import click from "../../img/click.png";
import { useState } from "react";

export default function MyInfo({ setExpert, setTime, setInput, setResult }) {
  const [timeval, setTimeval] = useState("");
  const [expertval, setExpertval] = useState("");

  function Count(e) {
    e.preventDefault();
    setTime(Math.floor(10000 / timeval));
    setExpert(expertval);
    setInput(true); // 로딩 컴포넌트 출력
    setResult(false); // submit을 또 누른 경우, 결과창 안보이도록 함
    setTimeout(() => {
      setInput(false);
      setResult(true);
    }, 3000);
  }

  return (
    <section className="section-myInfo">
      <form onSubmit={Count}>
        <label>
          <span>나는</span>
          <input
            type="text"
            placeholder="예)프로그래밍"
            onChange={(e) => {
              setExpertval(e.target.value);
            }}
            required
          />
          <span>전문가가 될 것 이다.</span>
        </label>

        <label>
          <span>그래서 앞으로 매일 하루에</span>
          <input
            type="number"
            placeholder="예) 5"
            onChange={(e) => {
              setTimeval(e.target.value);
            }}
            required
          />
          <span>시간씩 훈련할 것이다.</span>
        </label>
        <div className="btn-box">
          <button type="submit" className="btn-submit">
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </button>
          <img src={click} alt="click" />
        </div>
      </form>
    </section>
  );
}
