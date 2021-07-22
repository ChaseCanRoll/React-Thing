import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
      super();


      this.state = {
        pageTitle: "Welcome I guess",
        isLoading: false,
        data: [
          {title: "yes", category: "yes", slug:"yes" },
          {title: "no", category: "no", slug:"no" },
          {title: "maybe so", category: "no", slug:"maybe-so" },
          {title: "probably", category: "yes", slug:"probably" }
        ]
      };

      this.handleFilter = this.handleFilter.bind(this);
      this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handleFilter(filter) {
      this.setState({
        data: this.state.data.filter(item =>{
          return item.category ===filter;
        })
      })
    }

    getPortfolioItems() {
      axios.get('https://chaseforeman.devcamp.space/portfolio/portfolio_items')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
    }

    portfolioItems() {
      return this.state.data.map(item => {
        return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
      })
    }

    handlePageTitleUpdate() {
      this.setState({
        pageTitle: "Horray"
      })
    }

    render() {
      if(this.state.isLoading) {
        return <div>Loading...</div>
      }
      this.getPortfolioItems


      return (
        <div>
            <h2>{this.state.pageTitle}</h2>

            <button onClick={() => this.handleFilter('yes')}>Yes</button>
            <button onClick={() => this.handleFilter('no')}>No</button>

            {this.portfolioItems()}
        </div>
      );
    }
  }
  