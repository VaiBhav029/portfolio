import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcGraduationCap } from "react-icons/fc";
import { SiCognizant } from "react-icons/si";
const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-gray-300 "
    >
      <div className="md:w-[1000px] ">
        <h1 className="text-4xl font-bold border-b-2 border-green-600 inline ">
          Experience
        </h1>
        <p className="py-4">//Experience so far</p>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            date="September 2021 - Present"
            iconStyle={{ background: "#000048", color: "#fff" }}
            icon={<SiCognizant />}
            contentStyle={{ background: "#00337C" }}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Junior Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cognizant Technology Solutions
            </h4>
            <p className=""></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2021"
            iconStyle={{ background: "#000048", color: "#fff" }}
            icon={<FcGraduationCap />}
            contentStyle={{ background: "#00337C" }}
          >
            <h3 className="vertical-timeline-element-title">
              Mangalore Institute Of Technology and Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Computer Science & Engineering
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Work;
