import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
      super();


      this.state = {
        pageTitle: "Welcome I guess",
        isLoading: false,
        data: [
          {title: "yes", category: "yes" },
          {title: "no", category: "no" },
          {title: "maybe so", category: "no" },
          {title: "probably", category: "yes" }
        ]
      };

      this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
      this.setState({
        data: this.state.data.filter(item =>{
          return item.category ===filter;
        })
      })
    }

    portfolioItems() {
      return this.state.data.map(item => {
        return <PortfolioItem title={item.title} url={"google.com"} />;
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
  