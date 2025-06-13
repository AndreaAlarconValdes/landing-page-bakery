import Card from "../components/Card";
import Header from "../components/Header";
import { contactArray } from "../data/constants";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header
        title={
          <>
            Get in <span>Touch</span>
          </>
        }
        paragraph="We'd love to hear from you! Whether you have questions, special orders, or just want to say hello, we're here to help."
      />

      <div className="section contact">
        {contactArray.map((item) => (
          <Card
            className="contact-card"
            imageSrc={item.imageSrc}
            imageStyle={{
              width: 30,
            }}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="container visit">
        <div className="container-title">
          <h2>Visit Us</h2>
          <p>
            Our doors are always open to serve you fresh, delicious baked goods
          </p>
          <span>Monday - Friday: 6:00 AM - 8:00 PM</span>
          <span>Saturday: 7:00 AM - 9:00 PM</span>
          <span>Sunday: 8:00 AM - 6:00 PM</span>
        </div>
        <iframe
          className="location-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18951.331365742582!2d-6.140164579011137!3d53.57710823083159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486718989a1cd8d1%3A0xa00c7a997317b80!2sSkerries%2C%20Co.%20Dubl%C3%ADn!5e0!3m2!1ses!2sie!4v1749729087584!5m2!1ses!2sie"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
