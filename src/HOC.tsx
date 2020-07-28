import React, { Component } from 'react';

const initState = {
  name: 'Manny',
  message: 'Hi there',
};
type State = Readonly<typeof initState>;

const HOC = (WrappedComp: any) => {
  return class HOC extends Component<{}, State> {
    readonly state: State = initState;

    render() {
      return <WrappedComp name={initState.name} message={initState.message} />;
    }
  };
};

export default HOC;
