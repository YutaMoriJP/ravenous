import React from 'react';
import './BusinessList.css';
import Business from './Business.js';

class BusinessList extends React.Component {
  render() {
    const { businesses } = this.props;
    return (
      <div className="BusinessList">
        {businesses.map(business => (
          <Business business={business} key={business.id} />
        ))}
      </div>
    );
  }
}

export default BusinessList;
