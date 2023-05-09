import "./Modal.css";
import licat from "../../img/licat.png";
export default function Modal({ modalClose }) {
  return (
    <div className="modal-backdrop">
      <article className="modal-box">
        <h2>화이팅!!♥♥♥</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={licat} alt="licat" />
        <button className="btn-modal-close" onClick={modalClose}>
          종료하고 진짜 훈련하러 가기 GO! GO!
        </button>
      </article>
    </div>
  );
}
