import React from 'react'
import './SearchBar.css'

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChanged = this.handleTermChanged.bind(this);
    }

    search() {
        this.props.onSearch(this.state.searchTerm)
    }

    handleTermChanged(event) {
        this.setState({searchTerm: event.target.value});
        // this.search();
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChanged} placeholder="Enter A Song, Album, or Artist" />
                <button onClick={this.search} className="SearchButton">SEARCH</button>
            </div>
        )
    }
}
