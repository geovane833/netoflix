import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        placeholder="Pesquisar filmes, séries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '6px 10px', borderRadius: '4px 0 0 4px', border: 'none', width: '200px' }}
      />
      <button type="submit" style={{ padding: '6px 12px', backgroundColor: '#e50914', color: 'white', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
