import React from "react";

const HogCard = (props) => {
      let pigName = props.hog.name.toLowerCase().split(" ").join("_")
      let pigImage = require(`../hog-imgs/${pigName}.jpg`)
    return (
        <div className="card">
              <a className="image" href={`/hogs/${pigName}`}>
                  <img src={pigImage} alt={props.hog.name} width="100px" height="100px"/>
              </a>
              <div className="content">
                  <a className="header" href={`/hogs/${pigName}`}>{props.hog.name}</a>
              </div>
        </div>
    );
}

export default HogCard;
