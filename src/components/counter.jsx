import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1024px-Logo_TV_2015.svg.png",
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <img
          style={this.styles}
          className="img-fluid Image_size" //tried classbootstrap/style:prop/inline@App.css
          src={this.state.imageUrl}
          alt=""
        />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
