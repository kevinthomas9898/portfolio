import React from 'react';
import './PricingCardStyles.css';
import { Link } from 'react-router-dom';

const pricingData = [
  {
    title: '- Basic -',
    cost: '₹ 1000',
    features: [
      '1 to 3 Days',
      'Max 5 pages',
      '1 Revision',
      'Responsive'
    ]
  },
  {
    title: '- Standard -',
    cost: '₹ 2000',
    features: [
      '3 to 5 Days',
      'Max 10 pages',
      '2 Revisions',
      'Responsive'
    ]
  },
  {
    title: '- Premium -',
    cost: '₹ 3000',
    features: [
      '5 to 7 Days',
      'Unlimited pages',
      '3 Revisions',
      'Responsive'
    ]
  }
];

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        {pricingData.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <span className="bar"></span>
            <p className="cost">{card.cost}</p>
            {card.features.map((feature, index) => (
              <p key={index}>{feature}</p>
            ))}
            <Link to="/contact" className="btn">Purchase</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
