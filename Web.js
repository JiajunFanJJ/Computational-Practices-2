import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the Choo-Choo train! Please make your way to your seat. What's the number?",
    leftLabel: "8B",
    rightLabel: "14E",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: "Welcome aboard the Hoo-Hoo ship! We have a bad news, Hoo-Hoo ship is having a maintenance. We are so sorry about that.",
    leftLabel: "Go to Train",
    rightLabel: "Quit",
    leftPage: "onthetrain",
    rightPage: "death"
  },
  death: {
    text:"You failed on this trip.",
    Label: "Game Over",
    page: "start"
  },
  life: {
    text:"Wait for your next trip.",
    Label: "Game Over",
    page: "start"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        <img src={pageData.image} alt="page-specific i.amge,"/>
        <p>{pageData.text}</p>
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          <p>{pageData.leftLabel}</p>
        </button>
      </div>
    );
  }
}

export default App;
