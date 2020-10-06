import React from 'react';
import pizza from '../../src/img/pizza.png';
import './Business.css';

class Business extends React.Component {
  render() {
    const {
      business: {
        address,
        category,
        city,
        name,
        rating,
        reviewCount,
        state,
        zipCode,
      },
    } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={pizza} alt="pizza"></img>
        </div>
        <h2>{name}</h2>
        <div className="Business-Informaiton">
          <div className="Business-address">
            <p>{address}</p>
            <p>{city}</p>
            <p>
              {state}
              {zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{category}</h3>
            <h3 className="rating">{rating}</h3>
            <p>{reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Business;
