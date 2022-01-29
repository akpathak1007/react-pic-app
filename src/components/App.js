import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    let res = await unsplash.get("search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="container mt-3">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
