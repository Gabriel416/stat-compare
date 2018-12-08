import React, { Component } from "react";

const RenderComponent = PassedComponent => {
  return class extends Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default RenderComponent;
