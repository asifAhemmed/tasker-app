import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./tasks/TaskBoard";

export default function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <HeroSection></HeroSection>
      <TaskBoard></TaskBoard>
      <Footer></Footer>
    </div>
  );
}
