import { Link } from "react-router-dom";
import Card from "../components/Card";
import { processArray, teamArray, valuesArray } from "../data/constants";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-header">
        <div className="about-header-description">
          <h1>
            Our <span>Story</span>
          </h1>
          <p>
            Three generations of passion, tradition, and the finest ingredients
            come together to create extraordinary baked goods that warm hearts
            and bring families together.
          </p>
          <div className="header-stadistics">
            <div>
              <h3>75+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>50k+</h3>
              <p>Happy Customers</p>
            </div>
            <div>
              <h3>100+</h3>
              <p>Daily Fresh Items</p>
            </div>
          </div>
        </div>
        <img src="./bakery.png" alt="" />
      </div>
      <div className="timeline-container">
        <div className="home-section-title">
          <h2>A Legacy of Excellence</h2>
          <p>
            From humble beginnings to becoming the community's favorite bakery
          </p>
        </div>
        <section className="timeline-section">
          <img src="./local-bakery.png" alt="" />
          <div>
            <h3>1948 - The Beginning</h3>
            <p>
              Giuseppe and Maria Rossi opened their first bakery with a simple
              dream: to share the authentic flavors of their Italian heritage
              with their new community. Starting with just a wood-fired oven and
              family recipes passed down through generations.
              <br />
              <br />
              Every loaf was hand-shaped, every pastry crafted with love,
              establishing the foundation of quality and tradition that
              continues today.
            </p>
          </div>
        </section>
        <section className="timeline-section today">
          <div>
            <h3>Today - Innovation Meets Tradition</h3>
            <p>
              Now in our third generation, we've expanded our offerings while
              staying true to our roots. Our master bakers combine time-honored
              techniques with modern innovations to create exceptional breads,
              pastries, and desserts.
              <br />
              <br />
              We source the finest organic ingredients, support local farmers,
              and continue the family tradition of bringing joy to every table
              in our community.
            </p>
          </div>
          <img src="./chef-bakery.png" alt="" />
        </section>
      </div>
      <div className="container values">
        <div className="container-title">
          <h2>Our Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="section ">
          {valuesArray.map((item) => (
            <Card
              className="values-card"
              imageSrc={item.imageSrc}
              imageStyle={{
                width: 35,
              }}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="container team">
        <div className="container-title">
          <h2>Meet Our Team</h2>
          <p>The passionate artisans behind every delicious creation</p>
        </div>
        <div className="section">
          {teamArray.map((item) => (
            <Card
              className="team-card"
              imageSrc={item.imageSrc}
              imageStyle={{
                width: 300,
                height: 200,
                objectFit: "cover",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="container process">
        <div className="container-title">
          <h2>Our Process</h2>
          <p>From grain to golden perfection - how we create magic</p>
        </div>
        <div className="section">
          {processArray.map((item) => (
            <Card
              imageSrc={item.imageSrc}
              imageStyle={{
                width: 35,
              }}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="visit-footer">
        <h2>Ready to Taste Our Story?</h2>
        <p>
          Visit us today and experience the passion, tradition, and quality that
          makes Artisan Bakery special. Every bite tells our story.
        </p>
        <div className="visit-links">
          <a href="">Visit Our Bakery</a>
          <Link to="/menu">View Our Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
