import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `dot relative bg-yellow before:absolute before:w-6 before:h-6 
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="displayy flex flex-col gap-6 fixed top-[45%] right-7">
      <AnchorLink
        href="#home"
        className={`change-dot ${selectedPage === "home" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 `}
        onClick={() => setSelectedPage("home")}
      />

      {/* <AnchorLink
        href="#services"
        className={`change-dot ${selectedPage === "services" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 `}
        onClick={() => setSelectedPage("services")}
      /> */}

      <AnchorLink
        href="#projects"
        className={`change-dot ${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 `}
        onClick={() => setSelectedPage("projects")}
      />

      {/* <AnchorLink
        href="#testimonials"
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("testimonials")}
      /> */}

      <AnchorLink
        href="#contact"
        className={`change-dot ${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 `}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
