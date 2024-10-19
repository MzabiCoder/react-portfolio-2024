const SocialMediaIcons = () => {
  return (
    <div id="social_media"className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/nabil-fannane-34828741/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" width={35} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png" />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a> */}
      <a
        className=" hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/nabil.fannane.9"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" width={35} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-256.png" />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
