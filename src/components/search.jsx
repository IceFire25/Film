import React, { Component } from 'react';

 class Search extends Component {
    state = {
        search: '',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

  render() {
    return <div className='row'>
      <div className='col s12'>
        <div className='input-field'>
            <input
                className='validate'
                placeholder='search'
                type="search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
            />
            <button className='btn search-btn deep-purple accent-1'
                onClick={() => this.props.searchMovies(this.state.search)}>
            Search</button>
        </div>
        <div>
            <label>
                <input class="with-gap" name="type" type="radio"/>
                <span>All</span>
            </label>
            <label>
                <input class="with-gap" name="type" type="radio"/>
                <span>Movies only</span>
            </label>
            <label>
                <input class="with-gap" name="type" type="radio"/>
                <span>Series only</span>
            </label>
        </div>
      </div>
    </div>
  }
}

export { Search };
