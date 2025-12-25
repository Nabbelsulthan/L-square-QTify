import "./Search.css";

const Search = ({ placeholder }) => {
  return (
    <div className="search">
      <input type="text" placeholder={placeholder} />
      <button>🔍</button>
    </div>
  );
};


export default Search;
