import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ image, github, project, title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-amber-400 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
       <div className="socials">{github}{project}</div> 
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const projectDetails1 = {
  image:'https://images.pexels.com/photos/4691211/pexels-photo-4691211.jpeg?auto=compress&cs=tinysrgb&w=1600',
  github:(
        <a href="https://github.com/MzabiCoder/winerie" rel="noreferrer" target="_blank">
        <i class="fab fa-github fa-3x"></i>
      </a>
        ),
   project:(
          <a href="https://mzabicoder.github.io/winerie/" rel="noreferrer" target="_blank">
          <i class="fas fa-eye fa-3x"></i>
        </a>
      )     
}
const projectDetails2 = {
  image:'https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  github:(
        <a href="https://github.com/MzabiCoder/ComptoirRestaurant" rel="noreferrer"  target="_blank">
        <i class="fab fa-github fa-3x"></i>
      </a>
        ),
   project:(
          <a href="https://mzabicoder.github.io/ComptoirRestaurant/" rel="noreferrer" target="_blank">
          <i class="fas fa-eye fa-3x"></i>
        </a>
      )     
}
const projectDetails3 = {
  image:'https://images.pexels.com/photos/16666938/pexels-photo-16666938/free-photo-of-elegant-flatware-on-table-in-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1600',
  github:(
        <a href="https://github.com/MzabiCoder/reactProjec" rel="noreferrer" target="_blank">
        <i class="fab fa-github fa-3x"></i>
      </a>
        ),
   project:(
          <a href="http://MzabiCoder.github.io/reactProjec" rel="noreferrer" target="_blank">
          <i class="fas fa-eye fa-3x"></i>
        </a>
      )     
}
const projectDetails4 = {
  image:'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=1600',
  github:(
        <a href="https://github.com/MzabiCoder/mikisteakhouse_business" rel="noreferrer" target="_blank">
        <i class="fab fa-github fa-3x"></i>
      </a>
        ),
   project:(
          <a href="https://mzabicoder.github.io/mikisteakhouse_business/" rel="noreferrer" target="_blank">
          <i class="fas fa-eye fa-3x"></i>
        </a>
      )     
}
const projectDetails5 = {
  image:'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=800',
  github:(
        <a href="https://github.com/MzabiCoder/MERNFinal" rel="noreferrer" target="_blank">
        <i class="fab fa-github fa-3x"></i>
      </a>
        ),
   project:(
          <a href="https://myshop-sl5l.onrender.com/" rel="noreferrer" target="_blank">
          <i class="fas fa-eye fa-3x"></i>
        </a>
      )     
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid md:grid-cols-3 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div> */}
          <Project github={projectDetails1.github} project={projectDetails1.project} image={projectDetails1.image} title="Project 1" />
          <Project github={projectDetails2.github} project={projectDetails2.project} image={projectDetails2.image} title="Project 2" />

          {/* ROW 2 */}
          <Project github={projectDetails3.github} project={projectDetails3.project} image={projectDetails3.image}title="Project 3" />
          <Project github={projectDetails4.github} project={projectDetails4.project} image={projectDetails4.image} title="Project 4" />
          <Project github={projectDetails5.github} project={projectDetails5.project} image={projectDetails5.image} title="Project 5" />

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" /> */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-full max-h-full text-2xl font-playfair font-semibold"
          >
            SMOOTH & BEAUTIFUL USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
