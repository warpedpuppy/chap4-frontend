import React, { Component } from 'react';

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: [],
        showSuggestions: false
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
            query: value,
            suggestions,
        });
    }
    handleItemClicked = (suggestion) => {
        this.setState({
          query: suggestion
        });
      
        this.props.updateEvents(suggestion);
      }
  render() {
    return (
        <div className="CitySearch">
            <input
                type="text"
                className="city"
                value={this.state.query}
                onChange={this.handleInputChanged}
            />
             <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
                {this.state.suggestions.map((suggestion, key) => (
                    <li onClick={() => this.handleItemClicked(suggestion)} key={key}>{suggestion}</li>
                ))}
                <li key='all'  onClick={() => this.handleItemClicked("all")}>
                    <b>See all cities</b>
                </li>
            </ul>
        </div>
    );
  }
}

export default CitySearch;