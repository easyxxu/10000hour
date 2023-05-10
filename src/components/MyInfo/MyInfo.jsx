// import { useState } from "react";
import "./MyInfo.css";
import click from "../../img/click.png";

export default function MyInfo({ expert, time, input, result }) {
  function btnCount(e) {
    e.preventDefault();
    input(true);
    result(false);
    setTimeout(() => {
      input(false);
      result(true);
    }, 4000);
  }

  return (
    <section className="section-myInfo">
      <form onSubmit={btnCount}>
        <label>
          <span>나는</span>
          <input
            type="text"
            placeholder="예)프로그래밍"
            onChange={(e) => {
              expert(e.target.value);
            }}
          />
          <span>전문가가 될 것 이다.</span>
        </label>

        <label>
          <span>그래서 앞으로 매일 하루에</span>
          <input
            type="number"
            placeholder="예)5"
            onChange={(e) => {
              time(Math.floor(10000 / e.target.value));
            }}
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
