import "./App.css";

import React, { Component } from "react";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Eddie", age: 23 },
      { name: "Lore", age: 24 },
    ],
  };

  swithNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Eddie", age: 23 },
        { name: "Lore", age: 33 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Ciao io sono un'app in React</h1>
        <p>this is really working!</p>
        <button onClick={this.swithNameHandler}>Switch Name</button>
        <Person
          name="{this.state.persons[0].name}"
          age="{this.state.persons[0].age}"
        >
          My hobby is Racing
        </Person>
        <Person
          name="{this.state.persons[1].name}"
          age="{this.state.persons[1].age}"
        />
        <Person
          name="{this.state.persons[2].name}"
          age="{this.state.persons[2].age}"
        />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Ciao io sono un'app in React</h1>
//       <p>this is really working!</p>
//       <button>Switch Name</button>
//       <Person name="Max" age="28" >My hobby is Racing</Person>
//       <Person name="Rob" age="23"/>
//       <Person name="Lee" age="29"/>
//     </div>
//   );
// }
