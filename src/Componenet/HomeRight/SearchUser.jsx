import React, { useState } from 'react';
import { TextField } from '@mui/material';

function SearchUser({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center justify-between gap-4 mt-7">
      <TextField
        className="w-full rounded-full px-5 py-2 bg-transparent border border-[#3b4054]"
        type="text"
        placeholder="Search User"
        value={query}
        onChange={handleSearchChange}
        variant="outlined"
      />
    </div>
  );
}

export default SearchUser;
