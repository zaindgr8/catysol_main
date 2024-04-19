// SmoothScroll.js
import React from "react";

class SmoothScroll extends React.Component {
  scrollToSection = () => {
    // Find the target section using its id
    const section = document.getElementById(this.props.targetId);
    if (section) {
      // Smoothly scroll to the target section
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <button onClick={this.scrollToSection}>{this.props.buttonText}</button>
    );
  }
}

export default SmoothScroll;
