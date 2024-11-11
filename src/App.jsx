import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./tasks/TaskBoard";
import  "./App.css";

export default function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <TaskBoard></TaskBoard>
      <Footer></Footer>
    </>
  );
}
