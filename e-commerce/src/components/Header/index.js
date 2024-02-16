import React, { Component } from 'react';
import './index.css'; // You can create a CSS file for styling

class Header extends Component {
  render() {
    const { categories, selectedCategory, onSelectCategory } = this.props;
    return (
      <div className="header">
        <div className="left-section">
          <h1>TANN TRIM</h1>
        </div>
        <div className="center-section">
          <nav className='navbar'>
            
          <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className= {selectedCategory === category ? 'active' : 'a'}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
            
          </nav>
        </div>
        <div className="right-section">
          <img src="https://res.cloudinary.com/dzbfzovvx/image/upload/v1708062818/Group_327_aoboy2.png" alt="Search Icon" />
        </div>
      </div>
    );
  }
}

export default Header;
