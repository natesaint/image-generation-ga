import React from 'react';

export class NewImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSelected: false
    }

    this.drawCircle = this.drawCircle.bind(this);
  }

  componentDidMount() {
    this.drawCircle();
    console.log('sup');
  }

  drawCircle() {
    var c = document.getElementById("newCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
  }

  drawAllCircles() {

  }

  evaluateFitness() {

  }

  render() {
    return (
      <div>
        <canvas id="newCanvas" width="300" height="400"></canvas>
      </div>
    );
  }
}
