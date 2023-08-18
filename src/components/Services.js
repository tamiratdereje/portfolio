import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Flutter App Development",
  },
  {
    name: "Website Development",
  },
  {
    name: "Consultancy",
  },
  {
    name: "Database Design",
  },
];
const Services = React.memo(() => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Full Stack and mobile app Developer with over 3 years of
              experience.
            </h3>
            <button className="btn btn-sm">
              <a href="#work">See my work</a>{" "}
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("left ", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div className="">
              {services.map((service, index) => {
                const { name } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[140px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Services;
