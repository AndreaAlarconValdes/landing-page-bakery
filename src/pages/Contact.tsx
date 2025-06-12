import Card from "../components/Card";
import { contactArray } from "../data/constants";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-header">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          We'd love to hear from you! Whether you have questions, special
          orders, or just want to say hello, we're here to help.
        </p>
      </div>

      
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
    </div>
  );
};

export default Contact;
