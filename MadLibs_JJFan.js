import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        What is your name?
        <br />
        <br />
        <input
          type="text"
          value={getData("name")}
          onChange={event => setData("name", event.target.value)}
        />
        <br />
        <br />
        Think about a name that you don't like
        <br />
        <br />
        <input
          type="text"
          value={getData("2name")}
          onChange={event => setData("2name", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "welcome" }]
  },
  welcome: {
    content: (getData, setData) => (
      <p>Welcome,{getData("name")}! Are you ready to play a crazy game? }</p>
    ),
    buttons: [
      { label: "Yes", page: "starton" },
      { label: "No", page: "starton" }
    ]
  },
  starton: {
    content: (getData, setData) => (
      <p>
        Whatever, the game starts! XD
        <br />
        <br />
        You have an animal. What do you want to be?
        <br />
        <br />
        <input
          type="text"
          value={getData("animal")}
          onChange={event => setData("animal", event.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={getData("places")}
          onChange={event => setData("places", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "place" }]
  },
  place: {
    content: (getData, setData) => (
      <p>
        {getData("name")} meets {getData("2name")} on the {getData("places")},
        and
        {getData("2name")} is holding a {getData("animal")}.
        <br />
        <br />
        What do you want to do at this moment?
        <br />
        <br />
        Write down a verb word for each
        <br />
        <br />
        <input
          type="text"
          value={getData("movement")}
          onChange={event => setData("movement", event.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={getData("movement2")}
          onChange={event => setData("movement2", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "magic" }]
  },
  magic: {
    content: (getData, setData) => (
      <p>
        {getData("name")} {getData("movement")} the {getData("2name")}, and{" "}
        {getData("animal")} {getData("movement2")}.
        <br />
        <br />
        Choice a superpower you want
        <br />
        <br />
        <input
          type="text"
          value={getData("superpower")}
          onChange={event => setData("superpower", event.target.value)}
        />
        <br />
        <br />
        Think about a disaster
        <br />
        <br />
        <input
          type="text"
          value={getData("disaster")}
          onChange={event => setData("disaster", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "outcome" }]
  },
  outcome: {
    content: (getData, setData) => (
      <p>
        Suddenly, a {getData("disaster")} happens. Everyone is shocked. A light
        comes from sky going into {getData("name")}'s body,
        {getData("name")} gets the superpower, {getData("superpower")}.
        {getData("name")} uses {getData("superpower")} saving the world.
      </p>
    ),
    buttons: [{ label: "restart", page: "start" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName],
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
