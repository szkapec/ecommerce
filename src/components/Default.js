import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <>
<div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>page not found</h2>
                        <h3>the requested urllll <span className="text-danger">{this.props.location.pathname}</span>{" "}</h3> was not found
                    </div>
                </div>
            </div>
         </>
        )
    }
}
