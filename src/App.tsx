import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ContactForm from "./components/ContactForm";

function App() {
  const handleSearch = (query: string) => {
    // Implement your search logic here
    console.log("Searching for:", query);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {/* Render talent pool results here */}
      <ContactForm />
    </div>
  );
}

export default App;
