export default function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <h2 className="section__title">Let’s Connect</h2>
        <p className="section__subtitle">
          If you want to collaborate or hire me, feel free to reach out.
        </p>

        <div className="glass contact-card">
          <p className="contact-email">
            <span>Email:</span>{" "}
            <a href="mailto:parapatirohitreddy@gmail.com">parapatirohitreddy@gmail.com</a>
          </p>

          <div className="contact-actions">
            <a className="btn btn--glass" href="https://www.linkedin.com/in/rohit-parapati-8abb45239/" aria-label="Open LinkedIn profile">
              LinkedIn
            </a>
            <a className="btn btn--glass" href="https://github.com/rohitparapati" aria-label="Open GitHub profile">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
