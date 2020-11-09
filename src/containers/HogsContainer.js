import React, { Component } from "react";
import HogCard from '../components/HogCard'

class HogsContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            hogs: props.hogs,
            filter: "All"
        }
        console.log(props.hogs)
    }

    renderHogs = (hogs) => {
        return hogs.map(hog => <HogCard hog={hog}/>)
    }

    filterHogs = () => {
        switch (this.state.filter) {
            case "All":
                return this.renderHogs(this.state.hogs)
            case "Greased":
                return this.renderHogs(this.state.hogs.filter(hog => hog.greased === true))
            case "Name":
                return this.renderHogs(this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : -1))
            case "Weight Ascending":
                return this.renderHogs(this.state.hogs.sort((a,b) => (a.weight > b.weight) ? 1 : -1))
            case "Weight Decending":
                return this.renderHogs(this.state.hogs.sort((a,b) => (a.weight > b.weight) ? -1 : 1))
            default:
                 return this.renderHogs(this.state.hogs)    
        }
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form className="ui form">
                    <div className="field">
                        <label>Sort/Filter</label>
                        <select className="ui fluid dropdown" onChange={(event) => this.handleChange(event)} value={this.state.filter}>
                            <option value="All">All</option>
                            <option value="Greased">Greased</option>
                            <option value="Name">Name</option>
                            <option value="Weight Ascending">Weight Ascending</option>
                            <option value="Weight Decending">Weight Decending</option>
                        </select>
                    </div>
                </form>
                <div className="ui cards grid">
                    {this.filterHogs(this.state.filter)}
                </div>
            </div>
        );
    }
}

export default HogsContainer;
