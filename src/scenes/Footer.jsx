import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="footer" className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
      <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
         >
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            NABIL FANNANE
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2024 Nabil Fannane. All Rights Reserved.
          </p>
        </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
