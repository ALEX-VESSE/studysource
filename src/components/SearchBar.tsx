
interface SearchBarProps {
  searchQuery: string,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {

  const handleSearchQueryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>

      <h1 className="text-picton-blue-950 text-xl hover:text-sky-400 mb-10">Find All Materials Here</h1>
      <div className="flex flex-col sm:flex-row sm:items-center mb-4">
        <input
          type="text"
          placeholder="Search Docs"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="border-2 border-picton-blue-800 rounded-lg p-1 mr-2 w-full sm:w-auto bg-slate-100"
        />
        <button className="text-picton-blue-800 hover:underline bg-transparent rounded-lg p-2" onClick={(e) => { e.preventDefault(); clearSearch(); }}>
          Clear Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;