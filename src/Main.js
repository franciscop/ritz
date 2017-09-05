import React, { Component } from 'react';
import './Main.css';

const Products = (props) => (
  <div className="products">
    {props.products.length ? props.products.map(one => (
      <a onClick={() => props.changeDetails(one.id)}>{one.title}</a>
    )) : (
      <div>Loading products!</div>
    )}
  </div>
);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      current: null
    };

    setTimeout(() => {
      this.setState({
        products: [
          {
            id: 1,
            title: 'whatever super cool 1',
            img: 'http://via.placehold.it/300x200'
          },
          {
            id: 2,
            title: 'whatever super cool 2',
            img: 'http://via.placehold.it/300x200'
          },
          {
            id: 3,
            title: 'whatever super cool 3',
            img: 'http://via.placehold.it/300x200'
          }
        ]
      });
    }, 1000);
  }

  render() {
    const changeDetails = (id) => {
      this.setState({
        current: this.state.products.find(one => one.id === id)
      });
    }

    const showDetails = (obj) => (
      <div className="detail">
        <h2>{this.state.current.title}</h2>
        <img src={this.state.current.img} />
      </div>
    );

    const changeInput = e => {
      this.setState({
        input: e.target.value
      });
    };

    return (
      <main>
        <Products products={this.state.products} changeDetails={changeDetails} />

        {this.state.current ? showDetails(this.state.current) : (
          <p>Select one to see the details</p>
        )}

        <p>{this.state.input}</p>
        <input type="text" onChange={changeInput} />
      </main>
    )
  }
}
