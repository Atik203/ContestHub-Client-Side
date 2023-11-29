const Footer = () => {
  return (
    <div className="bg-gray-700">
      <footer className="footer text-white p-12 md:p-12 md:flex md:gap-4 lg:grid ">
        <nav>
          <header className="footer-title">ContestHub Services</header>
          <a className="link link-hover">Exciting Contests</a>
          <a className="link link-hover">Creative Challenges</a>
          <a className="link link-hover">Event Planning</a>
          <a className="link link-hover">Custom Prizes</a>
        </nav>

        <nav>
          <header className="footer-title">About Us</header>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Team</a>
          <a className="link link-hover">Testimonials</a>
          <a className="link link-hover">Partnerships</a>
        </nav>

        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <form>
          <header className="footer-title">Stay Updated</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-red-500 btn-primary border-none text-white absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="text-sm mb-1 text-center text-gray-300">
        &copy;2023 All Rights Reserved | ContestHub
      </p>
    </div>
  );
};

export default Footer;
