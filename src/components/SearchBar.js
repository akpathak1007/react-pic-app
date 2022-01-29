import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  //   * Context error SOLUTION 1: Define constructor and bind the method this current object context.
  /* constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  } 
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }
  */
    // *Content error SOLUTION 2: Define method as arrow function which already takes care of binding of the context.
    onFormSubmit = event=>{
        event.preventDefault();    
        this.props.onSubmit(this.state.term);
    }
    // * Third solution is to call onFormSubmit method in a arrow function on onSubmit prop
    /*  <form onSubmit={e=>this.onFormSubmit(e)} action="">*/
  render() {
    return (
      <div>
        <form onSubmit={e=>this.onFormSubmit(e)} action="">
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
              <button className="btn btn-outline-primary">
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
