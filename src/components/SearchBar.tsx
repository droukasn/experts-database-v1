import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.searchbar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search experts by skill, name, or location"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Search</button>
    </form>
  );
};

export default SearchBar;
