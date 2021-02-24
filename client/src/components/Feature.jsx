import React, { Component } from 'react'

class Feature extends Component {
    render() {
        return (
            <div>
                <h3>This is from a feature component</h3>
                {console.log("This is not error")}
                <h4>This is an additional line to make it rebuild again</h4>
            </div>
        )
    }
}

export default Feature;
