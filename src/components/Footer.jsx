import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div className="footer-info">
        <div class="footer-section about">
          <div className="footer-logo-title">
            <img src="./logo.svg" alt="" />
            <h3>Artisan Bakery</h3>
          </div>
          <p>
            Crafting exceptional baked goods with passion and tradition since
            1985.
          </p>
          <div className="social-contact">
            <img src="./github.svg" alt="" />
            <img src="./linkedin.svg" alt="" />
          </div>
        </div>

        <div class="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Products</a>
            </li>
            <li>
              <a href="#">Catering</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
          </ul>
        </div>

        <div class="footer-section contact">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <img src="./location.svg" alt="" />
            <p>123 Baker Street, City, State 12345</p>
          </div>
          <div className="contact-info">
            <img src="./phone.svg" alt="" />
            <p>(555) 123-4567</p>
          </div>
          <div className="contact-info">
            <img src="./email.svg" alt="" />

            <p>
              <a href="mailto:info@artisanbakery.com">info@artisanbakery.com</a>
            </p>
          </div>
        </div>

        <div class="footer-section hours">
          <h3>Store Hours</h3>
          <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
          <p>Saturday: 7:00 AM - 9:00 PM</p>
          <p>Sunday: 8:00 AM - 6:00 PM</p>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; {new Date().getFullYear()} Artisan Bakery – Portfolio project by
        Andrea Alarcón Valdés.
      </div>
    </footer>
  );
};

export default Footer;
