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
      <div className="values-container">
        <div className="home-section-title">
          <h2>Our Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="story-section values">
          <section>
            <img src="./award.svg" alt="" />
            <h3>Fresh Ingredients</h3>
            <p>
              We source only the finest organic ingredients from local farms to
              ensure every product meets our high standards.
            </p>
          </section>
          <section>
            <img src="./heart.svg" alt="" />
            <h3>Traditional Methods</h3>
            <p>
              Our time-honored baking techniques have been perfected over
              decades, creating authentic flavors and textures.
            </p>
          </section>
          <section>
            <img src="./team.svg" alt="" />
            <h3>Made with Love</h3>
            <p>
              Every item is crafted with care and attention to detail, ensuring
              exceptional quality in every single bite.
            </p>
          </section>
        </div>
      </div>
      <div className="team-container">
        <div className="home-section-title">
          <h2>Meet Our Team</h2>
          <p>The passionate artisans behind every delicious creation</p>
        </div>
        <div className="team-section">
          <section>
            <img src="./team(03).webp" alt="" />
            <h4>Marco Rossi</h4>
            <h5>Head Baker & Owner</h5>
            <p>
              Third-generation baker carrying on the family tradition with
              passion and innovation.
            </p>
          </section>
          <section>
            <img src="./team(01).jpg" alt="" />
            <h4>Marta Chen</h4>
            <h5>Pastry Chef</h5>
            <p>
              Award-winning pastry chef specializing in French techniques and
              artistic dessert presentations.
            </p>
          </section>
          <section>
            <img src="./team(02).webp" alt="" />
            <h4>Antonio Rivera</h4>
            <h5>Bread Master</h5>
            <p>
              Artisan bread specialist with 12+ years of experience in
              traditional European baking methods.
            </p>
          </section>
        </div>
      </div>
      <div className="process-container">
        <div className="home-section-title">
          <h2>Our Process</h2>
          <p>From grain to golden perfection - how we create magic</p>
        </div>
        <div className="story-section">
          <section>
            <img src="./plant.svg" alt="" />
            <h3>Premium Ingredients</h3>
            <p>
              We source only the finest organic flours, fresh dairy, and
              seasonal ingredients from trusted local suppliers.
            </p>
          </section>
          <section>
            <img src="./clock.svg" alt="" />
            <h3>Handcrafted</h3>
            <p>
              Every item is carefully crafted by hand using traditional
              techniques passed down through generations.
            </p>
          </section>
          <section>
            <img src="./heart.svg" alt="" />
            <h3>Perfect Baking</h3>
            <p>
              Our master bakers use precise timing and temperature control to
              achieve the perfect texture and flavor.
            </p>
          </section>
          <section>
            <img src="./star.svg" alt="" />
            <h3>Fresh Daily</h3>
            <p>
              Everything is baked fresh daily, ensuring you always get the
              highest quality and best taste possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
