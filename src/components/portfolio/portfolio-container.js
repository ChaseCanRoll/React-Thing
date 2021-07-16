import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
      super();


      this.state = {
        pageTitle: "Welcome I guess",
        data: [
          {title: "yes" },
          {title: "no" },
          {title: "maybe so" }
        ]
      };

      this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
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
      return (
        <div>
            <h2>{this.state.pageTitle}</h2>

            {this.portfolioItems()}

            <hr/>

            <button onClick={this.handlePageTitleUpdate}>Change Title</button>
        </div>
      );
    }
  }
  