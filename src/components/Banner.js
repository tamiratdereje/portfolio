import React from "react";

import Image from "../assets/banner/Programming.gif";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Banner = React.memo(() => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          {" "}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h5
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Tamirat <span>Dereje</span>
            </motion.h5>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mr-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className=" mr-4 text-white">I am a </span>
              <TypeAnimation
                sequence={["Web Developer ", 2000, "Flutter Mobile Developer", 2000, "Backend Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              with over 3 years of experience
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg ">
                {" "}
                <a href="#contact">Contact me</a>
              </button>
              <a href="#" className="text-gradient btn-link">
                <a href={process.env.REACT_APP_PORTFOLIO_URL} target="blank">
                  {" "}
                  My Portfolio
                </a>
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="https://github.com/tamiratdereje" target="blank">
                <FaGithub />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/tamirat-dereje-2a8b09234/"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Banner;
