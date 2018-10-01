import React from 'react';
import ReactDOM from 'react-dom';

// stateless function component
const Color = props => {
  const color = props.color;
  const selectColor = props.selectColor;
  //In the Color component, write an anonymous function that will invoke our "selectColor" prop with that component's "color" prop
  return <div className={color} onClick={() => selectColor(color)} />;
};
// Class function component
class Picker extends React.Component {
  //Initialize some state on the Picker component for "selectedColor":
  constructor() {
    super();
    this.state = {
      selectedColor: 'red'
    };
    // bind the selectColor method
    this.selectColor = this.selectColor.bind(this);
  }
  //Write a method called "selectColor", which takes a "colorName" as an argument, and sets state so that the "selectedColor" is the chosen "colorName"
  selectColor(colorName) {
    this.setState({
      selectedColor: colorName
    });
  }

  render() {
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={this.state.selectedColor}>{this.state.selectedColor}</div>
        </div>
        <div id="colors-list">
          {/* Pass the selectColor method down to each of the Color components, anything inside an {} is an expression to be evaluated*/}
          <Color color="red" selectColor={this.selectColor} />
          <Color color="blue" selectColor={this.selectColor} />
          <Color color="green" selectColor={this.selectColor} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Picker />, document.getElementById('app'));
