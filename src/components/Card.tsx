import React from "react";
import "./Card.css";

type CardProps = {
  imageSrc: string;
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
  imageStyle?: React.CSSProperties;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  className = "",
  imageStyle,
}) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageSrc} alt={title} style={imageStyle} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
