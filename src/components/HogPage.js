import React from "react";

const HogPage = (props) => {
      let hog = props.hogs.filter(pig => pig.name.toLowerCase().split(" ").join("_") === props.match.params.hog_name)[0]

      let pigName = hog.name.toLowerCase().split(" ").join("_")
      let pigImage = require(`../hog-imgs/${pigName}.jpg`)
    return (
        <div>
            <img src={pigImage} class="ui inverted vertical masthead center aligned segment"/>
            <div class="ui text container">
                <h1 class="ui inverted header">
                    {hog.name}
                </h1>
            </div>
            <div className="ui grid container">
                <div className="ui four wide column">
                    <h3>Specialty</h3>
                    <p>{hog.specialty}</p>
                </div>
                <div className="ui four wide column">
                    <h3>Weight</h3>
                    <p>{hog.weight}</p>
                </div>
                <div className="ui four wide column">
                    <h3>Greased</h3>
                    <p>{hog.greased ? "Yes" : "No"}</p>
                </div>
                <div className="ui four wide column">
                    <h3>Highest Medal Achieved</h3>
                    <p>{hog['highest medal achieved'].split("")[0].toUpperCase() + hog['highest medal achieved'].slice(1)}</p>
                </div>
            </div>
        </div>
    );
}


export default HogPage;
