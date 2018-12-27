import React from 'react';
import { NewImage } from './NewImage.js';
import { OriginalImage } from './OriginalImage.js';

export class GeneticAlgorithm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false
    }
  }

  render() {
    return (
      <div>
        <h1 className="display-3 text-center">Image Generation</h1>
        <NewImage />
        <OriginalImage />
      </div>
    );
  }
}
