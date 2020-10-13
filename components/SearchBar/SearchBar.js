import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '', location: '', sortBy: 'best_match' };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }
  getSortByClass(sortByOption) {
    const { sortBy } = this.state;
    if (sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }
  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }
  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption, index) => {
      const sortByOptionValue = Object.values(this.sortByOptions)[index];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }
  handleSearch(e) {
    const { searchYelp } = this.props;
    const { term, location, sortBy } = this.state;
    searchYelp(term, location, sortBy);
    e.preventDefault();
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
          ></input>
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange}
          ></input>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
