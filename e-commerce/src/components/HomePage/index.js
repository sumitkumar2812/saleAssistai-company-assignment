import React, { Component } from 'react';
import ProductCard from '../ProductCard';
import Header from '../Header';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      error: null,
      selectedCategory: "women's clothing", // Default category
    };
  }

  componentDidMount() {
    // Fetch data for the default category
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const { selectedCategory } = this.state;
    let apiUrl = 'https://fakestoreapi.com/products';

    // Append category to the API URL if it's not 'all'
    if (selectedCategory !== "all") {
      apiUrl += `/category/${selectedCategory}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      this.setState({
        products: data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: 'Error fetching data',
        loading: false,
      });
      console.error(error);
    }
  };

  handleCategoryChange = (category) => {
    // Update the selected category and fetch data for that category
    this.setState({ selectedCategory: category, loading: true }, this.fetchProducts);
  };

  render() {
    const { products, loading, error, selectedCategory } = this.state;
    const categories = ["women's clothing", "men's clothing", "electronics", "jewelery"]; // Add more categories as needed

    if (loading) {
      return <p className='loding'>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div className="home">
        <Header
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={this.handleCategoryChange}
        />
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
