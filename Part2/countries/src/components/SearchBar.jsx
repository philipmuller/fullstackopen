const SearchBar = ({ onQueryChange }) => {

    const handleQueryChange = (event) => {
      onQueryChange(event.target.value)
    }
  
    return (
      <div>
        Search: <input onChange={handleQueryChange} />
      </div>
    )
}

  export default SearchBar