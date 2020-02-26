import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    midLabel: "You suddenly feel so tired and give up.",
    leftPage: "onthetrain",
    rightPage: "ontheship",
    midPage: "Restart"
  },
  onthetrain: {
    text:
      "Welcome aboard the Choo-Choo train! Please make your way to your seat. What's the number?",
    leftLabel: "8B",
    rightLabel: "14E",
    leftPage: "Girl",
    rightPage: "Boy"
  },
  ontheship: {
    text:
      "Welcome aboard the Hoo-Hoo ship! We have a bad news, Hoo-Hoo ship is having a maintenance. We are so sorry about that.",
    leftLabel: "Go to Train",
    rightLabel: "Quit",
    leftPage: "onthetrain",
    rightPage: "death"
  },
  Girl: {
    text:"There is a girl sitting next to your seat. She looks so sad.",
    leftLabel: "'Are you OK?'",
    rightLabel: "Sit on your seat and watch your phone.",
    leftPage: "Girldeath",
    rightPage: "Boy"
  },
  Boy: {
    text:"A boy is looking at your phone. He looks like really interested in your phone.",
    leftLabel: "'Why you keep looking at my phone?'",
    rightLabel: "Ignore him and keep playing your phone",
    leftPage: "Boyphone",
    rightPage: "life"
  },
  Boyphone: {
    text:"He said he wants to take photo with you.",
    leftLabel: "Take a photo with him",
    rightLabel: "Ignore him and keep playing your phone",
    leftPage: "Boydeath",
    rightPage: "life"
  },
  Boydeath: {
    text: "You take a photo with the boy, and you find out that there is only you in the photo. You slowly look back, you see a blood mouth.",
    EndLabel: "You dead",
    EndPage: "start"
  },
  Girldeath: {
    text: "The girl starts crying, and the crying sound makes you crazy. You cannot stand that, then your head explode.",
    EndLabel: "You dead",
    EndPage: "start"
  },
  death: {
    text: "You give up on this trip.",
    EndLabel: "Game Over",
    EndPage: "start"
  },
  Restart: {
    text: "You go back home and prepare for the next trip.",
    EndLabel: "Next trip.",
    EndPage: "start"
  },
  life: {
    text: "You finished your boring trip and wait for the next one.",
    EndLabel: "Next trip",
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
    var button4;

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

    if (pageData.leftPage) {
      button4 = (
        <button onClick={() => this.goToPage(pageData.midPage)}>
          <p>{pageData.midLabel}</p>
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
        {button4}
      </div>
    );
  }
}

export default App;
