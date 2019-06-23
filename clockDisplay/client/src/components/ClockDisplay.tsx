import * as React from 'react';

interface IClockDisplayProps {
  clockText?: string;
}

interface IClockDisplayState {
  time: string;
}

export class ClockDisplay extends React.Component<IClockDisplayProps, IClockDisplayState> {
  constructor(props: IClockDisplayProps) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  renderClockDisplay() : JSX.Element {
    if(this.props.clockText !== undefined) {
      return (
        <div>
          <h1>{this.props.clockText}</h1>
          <p>{this.state.time}</p>
        </div>
      );
    }
    return <p>{this.state.time}</p>
  }

  render() {
    return (
      <div>
        {this.renderClockDisplay}
      </div>
    );
  }
}