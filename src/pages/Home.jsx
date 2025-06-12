import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="header">
        <img src="./bakery-header.jpeg" alt="bakery artisan" />
        <div className="header-description">
          <h1 className="header-description-title">
            Fresh Baked Perfection Every Day
          </h1>
          <p className="header-description-paragraph">
            Discover our artisanal breads, pastries, and desserts made with the
            finest ingredients and traditional techniques passed down through
            generations.
          </p>
          <Link to="/menu">See Our Menu</Link>
        </div>
      </div>
      <div className="story-container">
        <div className="home-section-title">
          <h2>Our Story</h2>
          <p>
            Three generations of passion, tradition, and innovation in every
            bite
          </p>
        </div>
        <div className="story-section">
          <section>
            <img src="./plant.svg" alt="" />
            <h3>Fresh Ingredients</h3>
            <p>
              We source only the finest organic ingredients from local farms to
              ensure every product meets our high standards.
            </p>
          </section>
          <section>
            <img src="./clock.svg" alt="" />
            <h3>Traditional Methods</h3>
            <p>
              Our time-honored baking techniques have been perfected over
              decades, creating authentic flavors and textures.
            </p>
          </section>
          <section>
            <img src="./heart.svg" alt="" />
            <h3>Made with Love</h3>
            <p>
              Every item is crafted with care and attention to detail, ensuring
              exceptional quality in every single bite.
            </p>
          </section>
        </div>
      </div>
      <div className="specialties-container">
        <div className="home-section-title specialties">
          <h2>Our Specialties</h2>
          <p>Handcrafted daily with passion and precision</p>
        </div>
        <div className="specialties-section">
          <section>
            <img src="./bread.jpg" alt="" />
            <h3>Artisan Breads</h3>
            <p>
              Traditional sourdough, whole grain, and specialty breads baked
              fresh daily.
            </p>
          </section>
          <section>
            <img src="./pastries.jpg" alt="" />
            <h3>French Pastries</h3>
            <p>
              Delicate croissants, pain au chocolat, and classic French
              pastries.
            </p>
          </section>
          <section>
            <img src="./cakes.jpg" alt="" />
            <h3>Custom Cakes</h3>
            <p>
              Beautiful custom cakes for weddings, birthdays, and special
              occasions.
            </p>
          </section>
          <section>
            <img src="./drinks.jpg" alt="" />
            <h3>Specialty Drinks</h3>
            <p>
              Enjoy expertly brewed coffee, artisan teas, and refreshing
              seasonal beverages to pair with your favorite treats.
            </p>
          </section>
        </div>
      </div>
      <div className="reviews-container">
        <div className="home-section-title">
          <h2>What Our Customers Say</h2>
          <p>Thousands of happy customers can't be wrong</p>
        </div>
        <div className="reviews-section">
          <section>
            <div className="review-puntuation">
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
            </div>

            <p>
              "The best bakery in town! Their sourdough bread is absolutely
              incredible, and the pastries are divine. I'm a regular customer
              now."
            </p>
            <div className="costumer-details">
              <img src="./costumer-sarah.jpg" alt="" />
              <div>
                <h5>Sarah Johnson</h5>
                <p>Local Food Blogger</p>
              </div>
            </div>
          </section>
          <section>
            <div className="review-puntuation">
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
            </div>
            <p>
              "They made our wedding cake and it was perfection! Beautiful
              design and the taste was even better. Highly recommended!"
            </p>
            <div className="costumer-details">
              <img src="./costumer-michael.jpg" alt="" />
              <div>
                <h5>Michael Chen</h5>
                <p>Happy Customer</p>
              </div>
            </div>
          </section>
          <section>
            <div className="review-puntuation">
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
            </div>
            <p>
              "Fresh ingredients, authentic flavors, and exceptional service.
              This bakery has become part of our weekly routine!"
            </p>
            <div className="costumer-details">
              <img src="./costumer-emma.jpg" alt="" />
              <div>
                <h5>Emma Rodriguez</h5>
                <p>Loyal Customer</p>
              </div>
            </div>
          </section>
          <section>
            <div className="review-puntuation">
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
              <img src="./star.svg" alt="star" />
            </div>
            <p>
              "Absolutely love this place! The croissants are buttery and flaky,
              and their coffee pairs perfectly with any pastry. Friendly staff
              and cozy atmosphere."
            </p>
            <div className="costumer-details">
              <img src="./costumer-erika.jpg" alt="" />
              <div>
                <h5>Erika Garcia</h5>
                <p>Loyal Customer</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-section-title">
          <h2>Ready to Taste Perfection?</h2>
          <p>Visit us today</p>
          <span>Monday - Friday: 6:00 AM - 8:00 PM</span>
          <span>Saturday: 7:00 AM - 9:00 PM</span>
          <span>Sunday: 8:00 AM - 6:00 PM</span>
        </div>
        <div className="maps-section">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18951.331365742582!2d-6.140164579011137!3d53.57710823083159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486718989a1cd8d1%3A0xa00c7a997317b80!2sSkerries%2C%20Co.%20Dubl%C3%ADn!5e0!3m2!1ses!2sie!4v1749729087584!5m2!1ses!2sie"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
