import { useState } from "react";
import Header from "./components/Header/Header";
import RuleInfo from "./components/RuleInfo/RuleInfo";
import MyInfo from "./components/MyInfo/MyInfo";
import DayCount from "./components/DayCount/DayCount";
import GoTraining from "./components/GoTraining/GoTraining";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import "./App.css";

function App() {
  const [expert, setExpert] = useState("");
  const [time, setTime] = useState("");
  const [input, setInput] = useState(false);
  const [result, setResult] = useState(false);
  return (
    <>
      <Header />
      <main>
        <RuleInfo />
        <MyInfo
          expert={setExpert}
          time={setTime}
          input={setInput}
          result={setResult}
        />
        {input && <Loading />}
        {result && (
          <>
            <DayCount expert={expert} time={time} />
            <GoTraining />
          </>
        )}
        {/* <DayCount expert={expert} time={time} /> */}
      </main>
      <Footer />
    </>
  );
}
export default App;
