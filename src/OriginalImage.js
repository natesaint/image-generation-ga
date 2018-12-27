import React from 'react';

export class OriginalImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSelected: false
    }
  }

  render() {
    return (
      <div>
        <input type="file" />
        <canvas id="origCanvas" width="300" height="400"></canvas>
      </div>
    );
  }
}
