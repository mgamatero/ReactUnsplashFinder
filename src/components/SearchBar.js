import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchBarInput: ''
    }

    handleOnChangeSearchBar = (e) => {
        e.preventDefault();
        // this.setState({ searchBarInput: e.target.value })
        this.props.onSubmitBackToApp(this.state.searchBarInput)
    }

    

    render() {
        return (
            <div className="container">
                <div className="jumbotron py-1 my-3" onSubmit={this.handleOnChangeSearchBar}>
                    <form className="form-group">
                        <label htmlFor="search">Enter Subject (Enter to search): </label>
                        <input type="text" id="search" value={this.state.term} className="form-control" onChange={(e)=>this.setState({searchBarInput:e.target.value})}></input>
                        <small>Powered by Unsplash API</small>
                        </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;