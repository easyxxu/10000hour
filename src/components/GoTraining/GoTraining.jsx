import { useState } from "react";
import Modal from "../Modal/Modal";
import "./GoTraining.css";
export default function GoTraining() {
  const [modal, setModal] = useState(false);
  function modalView() {
    setModal(true);
  }
  function modalClose() {
    setModal(false);
  }
  function btnShare() {
    alert("링크가 복사되었습니다!");
  }
  return (
    <section className="section-training">
      <button className="btn-training" onClick={modalView}>
        훈련하러 가기 GO!GO!
      </button>
      <button className="btn-share" onClick={btnShare}>
        공유하기
      </button>
      {modal && <Modal modalClose={modalClose} />}
    </section>
  );
}
