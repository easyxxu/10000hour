// import { useState } from "react";
import "./MyInfo.css";
import click from "../../img/click.png";
export default function MyInfo({ expert, time, input, result }) {
  const btnCount = (e) => {
    input(true);
    result(false);
    setTimeout(() => {
      input(false);
      result(true);
    }, 4000);
  };
  const changeExpert = (e) => {
    // console.log("expert : ", e.target.value);
    expert(e.target.value);
  };
  const changeTime = (e) => {
    time(Math.floor(10000 / e.target.value));
    // console.log("time : ", Math.floor(10000 / e.target.value));
  };
  return (
    <section className="section-myInfo">
      <div className="wrap-ihaveto">
        <p>나는</p>
        <input
          type="text"
          placeholder="예)프로그래밍"
          onChange={changeExpert}
        />
        <p>전문가가 될 것 이다.</p>
      </div>
      <div className="wrap-ihaveto">
        <p>그래서 앞으로 매일 하루에</p>
        <input type="number" placeholder="예)5" onChange={changeTime} />
        <p>시간씩 훈련할 것이다.</p>
      </div>
      <div className="btn-box">
        <button className="btn-cnt" onClick={btnCount}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
        <img src={click} alt="click" />
      </div>
    </section>
  );
}
