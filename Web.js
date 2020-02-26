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
    text:
      "Welcome aboard the Hoo-Hoo ship! We have a bad news, Hoo-Hoo ship is having a maintenance. We are so sorry about that.",
    leftLabel: "Go to Train",
    rightLabel: "Quit",
    leftPage: "onthetrain",
    rightPage: "death"
  },
  death: {
    text: "You failed on this trip.",
    EndLabel: "Game Over",
    EndPage: "start"
  },
  life: {
    text: "Wait for your next trip.",
    EndLabel: "Game Over",
    EndPage: "start"
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

    var button1;
    var button2;
    var button3;

    if (pageData.leftPage) {
      button1 = (
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          <p>{pageData.leftLabel}</p>
        </button>
      );
    }

    if (pageData.leftPage) {
      button2 = (
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          <p>{pageData.rightLabel}</p>
        </button>
      );
    }

    if (pageData.EndPage) {
      button3 = (
        <button onClick={() => this.goToPage(pageData.EndPage)}>
          <p>{pageData.EndLabel}</p>
        </button>
      );
    }

    return (
      <div className="App">
        <img src={pageData.image} alt="page-specific i.amge," />
        <p>{pageData.text}</p>
        {button1}
        {button2}
        {button3}
      </div>
    );
  }
}

export default App;
