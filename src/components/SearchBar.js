import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} action="">
          <div>
            <label htmlFor="search" className="form-label">
              Search Image
            </label>
            <div className="input-group">
              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Type here..."
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <button onClick={this.onFormSubmit} className="btn btn-outline-primary">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
