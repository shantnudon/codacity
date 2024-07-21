import Achievements from "../../components/Achievements";
import Aim from "../../components/Aim";
import TrendingCourses from "../../components/CoursesCarousal";
import Hero from "../../components/Hero";
import Marqueediv from "../../components/Marquee";
import Test from "../../components/test";
import TestComponent from "../../components/testComponent";
// import TestComponent from "../../components/testComponent";
// import Modal from "../../components/utilityComponents/modal";
import Title from "../../components/utilityComponents/Title";

export default function Home() {
  return (
    <main>

      {/* <TestComponent/> */}
      <Test/>
      {/* <Hero />
      <Title
        subTitle={"Our students have gotten offers from big names."}
        title={"Placement Partners"}
      />
      <Marqueediv />
      <Achievements />
      <Title
        subTitle={"Choose the most demanding courses in the market."}
        title={"Most Demanding Courses"}
      />
      <div id="offer" className="relative mb-7 hidden sm:block">
        <img src="/offer.webp" alt="" />
        <p className="absolute right-24 top-5 h-20 w-80 bg-[#0280a5] text-2xl text-white">
          {" "}
          On your 1st purchase via UPI payment!{" "}
        </p>
      </div>

      <TrendingCourses />
      <Title
        subTitle={
          "We offer a comprehensive range of coding courses, designed for all levels."
        }
        title={"Know Our Aim"}
      />
      <Aim /> */}
    </main>
  );
}
