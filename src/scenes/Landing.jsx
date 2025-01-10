import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1100px)");
  return (
    <section style={{ marginTop: '3rem !importat' }}
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 mt-12"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:z-[-1]"
            >
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full ss:max-w-[400px] ms:max-w-[400px] xs:max-w-[400px] max-w-[500px] md:max-w-[500px]"
                src="./assets/profile.png"
              />
            </div>
          </motion.div>
        ) : (
          <img
            alt="profile"
            id="image"
            className="z-10 w-full max-w-[200px] md:max-w-[600px]"
            src="assets/profile.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl z-10 text-center md:text-start">
            Nabil {""}
            <span
              className="brush xs:relative xs:text-white
              before:absolute before:-left-[50px] before:-top-[190px] before:z-[-1]"
            >
              Fannane
            </span>
          </p>

          <p style={{ fontSize: '1.2rem' }} className="z-50 mt-5 mb-7 text-center md:text-start">
            I love to craft beautiful & robust frontend products with
            great user experience.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            id="landing-b"
          >
            Contact Me
          </AnchorLink>
          {/* <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink> */}
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
