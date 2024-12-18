import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="services" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SERVICES</span>
          </p>
          <LineGradient width="w-1/3" />

        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              {/* <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              /> */}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Web Applications
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red rounded-bl-full absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Work with Product Designers to implement the next generation of websites & apps, 
          Build efficient and reusable front-end and systems that are intuitive, efficient.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              User interfaces
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow rounded-bl-full absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Keep the interface simple, Create consistency and use common UI elements. 
          Strategically use color and texture & Use 
          typography to create hierarchy and clarity.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Testing
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute rounded-bl-full right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Test each component individually and how they behave when integrated via jest 
           for instance. The entire testing involves unit testing, component testing, 
           end-to-end testing,and cross browser compatibility testing (using cypress GUI steps).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
