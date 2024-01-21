import React from "react";

function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input}
        className="mb-3"
        placeholder="Find Your Friend"
        onChange={searchChange}
      ></input>
    </>
  );
}
const styles = {
  input: {
    width: "100%",
    backgroundColor: 'black',
    color: 'white',
    outline: "none",
    margin: "auto",
    padding: "5px",
  },
};
export default SearchBar;