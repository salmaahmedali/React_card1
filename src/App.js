import "./App.css";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";

function App() {
  return (
    <div className="card h-[100%] w-[450px] border border-black border-x-4 border-y-4  mt-4 ml-6">
      <Avatar />
      <div className="data p-5 pt-6">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

export default App;
