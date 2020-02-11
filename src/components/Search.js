import React from "react";
import { fetchSearchResults } from "../api/search";
import Button from "./layout/button/Button";
import Input from "./layout/input/Input";
import ResultCard from "../components/layout/result-card/ResultCard";
import "./Search.css";

class Search extends React.Component {
  state = {
    searchQuery: "",
    emptySearch: false,
    searchResultsDataItems: []
  };
  // On form submit get data from the imported fetchSearchResults function
  onFormSubmit = async e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    const searchResultsData = await fetchSearchResults(searchQuery);
    // Checking if the query is empty and the data has content
    if (searchQuery !== "" && searchResultsData.length > 0) {
      this.setState({
        searchResultsDataItems: searchResultsData,
        emptySearch: false
      });
    } else if (searchQuery === "" || searchResultsData.length === 0) {
      this.setState({
        emptySearch: true
      });
    }
  };
  // on change function to change the state of the input
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { searchQuery, searchResultsDataItems, emptySearch } = this.state;
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <Input
            placeholder="What are you looking for?"
            name="searchQuery"
            value={searchQuery}
            onChange={this.onChange}
          />
          <Button buttonText="Search" onButtonClick={this.onFormSubmit} />
        </form>
        <div className="results-wrapper">
          {emptySearch ? (
            <strong>No results found, please try again...</strong>
          ) : (
            <div className="results-container">
              {searchResultsDataItems.map(resultItem => {
                return (
                  <ResultCard resultItemData={resultItem} key={resultItem.id} />
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Search;
