import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = React.memo(() => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {" "}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1  bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Full Stack and mobile app Developer with of 3 years of experience.{" "}
            </h3>
            <p className="mb-6">
              {" "}
              My ardor for development originates from my profound admiration
              for crafting captivating and intuitive websites and mobile app. With a commanding
              grasp of HTML, CSS, JavaScript, React, Next.js, spring, dart, flutter, and
              Node.js, I possess the prowess to transform designs into vivid
              realities, guaranteeing flawless performance across diverse
              platforms and devices. By seamlessly integrating robust back-end
              frameworks, I ensure the seamless functionality and efficient data
              management of the websites and mobile app I create.
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : ""}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : ""} +
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  {" "}
                  Professional Projects
                  <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : ""} +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {" "}
                  Satisfied
                  <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <a href="#contact"> Contact me</a>
              </button>
              <a
                href={process.env.REACT_APP_PORTFOLIO_URL}
                target="_blank"
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;
