import Header from "./components/Header/Header";
import RuleInfo from "./components/RuleInfo/RuleInfo";
import MyInfo from "./components/MyInfo/MyInfo";
import "./App.css";
import DayCount from "./components/DayCount/DayCount";
function App() {
  return (
    <>
      <Header />
      <main>
        <RuleInfo />
        <MyInfo />
        <DayCount />
      </main>
      {/* 
      <GoTraining /> */}
    </>
  );
}
export default App;
