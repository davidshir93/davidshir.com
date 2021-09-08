import React from 'react'
import './Track.css'

export default class Track extends React.Component {
    
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }
    
    renderAction() {
        return (
            <button className="Track-action" onClick={this.props.isRemoval && this.addTrack}>{ this.props.isRemoval ? '+' : '-' }</button>
        )
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.artist} | {this.props.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}